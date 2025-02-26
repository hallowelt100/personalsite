import { Opacity } from '@mui/icons-material';
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
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h4" gutterBottom>
                My GitHub Activity
            </Typography>
            <LineChart
                sx={{
                    '& .MuiLineElement-root': {
                        stroke: '#4caf50',
                        strokeWidth: 2,
                    },
                    fill: 'linear-gradient(to top, #4caf50 0%, #4caf50 100%)',
                    fillOpacity: 0.3,
                    gradient: "linear-gradient(to top, #4caf50 0%, #4caf50 100%)",
                }}
                xAxis={[{ 
                    data: commitData.dates,
                    scaleType: 'band'
                }]}
                series={[
                    {
                        data: commitData.commits,
                        label: 'Commits',
                        area: true,
                        curve: "natural",
                    },
                ]}
                width={500}
                height={300}
            />
        </Paper>
    );
}
