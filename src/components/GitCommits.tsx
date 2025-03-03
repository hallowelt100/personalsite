import { Paper, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import React, { useEffect, useState } from 'react'

interface CommitData {
    dates: string[];
    commits: number[];
}

export default function GitCommits() {
    const [commitData, setCommitData] = useState<CommitData>({ dates: [], commits: [] });
    const username = 'hallowelt100'; // Your GitHub username

    useEffect(() => {
        const fetchCommits = async () => {
            const thirtyDays = new Date();
            thirtyDays.setDate(thirtyDays.getDate() - 30);
            const dateString = thirtyDays.toISOString().split('T')[0];

            try {
                const response = await fetch(
                    `https://api.github.com/search/commits?q=author:${username}+author-date:>${dateString}`,
                    {
                        headers: {
                            'Accept': 'application/vnd.github.v3+json',
                        }
                    }
                );
                const data = await response.json();

                const commitsByDate: Record<string, number> = {};
                data.items.forEach((item: any) => {
                    const date = item.commit.author.date.split('T')[0];
                    commitsByDate[date] = (commitsByDate[date] || 0) + 1;
                });

                const dates = Object.keys(commitsByDate).sort();
                const commits = dates.map(date => commitsByDate[date]);

                setCommitData({ dates, commits });
            } catch (error) {
                console.error('Failed to fetch commits:', error);
            }
        };

        fetchCommits();
    }, []);

    return (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 , display: 'flex' , flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" gutterBottom>
                My GitHub Activity
            </Typography>
            <LineChart
                sx={{
                    '& .MuiLineElement-root': {
                        strokeWidth: 2,
                        color: 'green',
                      },
                    '&. MuiAreaElement': {
                        fill: "url('#gradient')",
                    }
                }}
                xAxis={[{ 
                    data: commitData.dates,
                    scaleType: 'point'
                }]}
                series={[
                    {
                        data: commitData.commits,
                        label: 'Commits',
                        curve: "natural",
                        area: true,
                        showMark: false,
                    },
                ]}
                grid={{horizontal: true}}
                width={500}
                height={300}
            >
            <defs>
                <linearGradient id="gradient" gradientTransform='rotate(90)'>
                        <stop offset="100%" stopColor="green" />
                        <stop offset="0%" stopColor="transparant" />
                </linearGradient>
            </defs>
            </LineChart>
        </Paper>
    );
}
