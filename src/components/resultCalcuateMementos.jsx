"use client";
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/joy';
import MementoCard from '@/components/MaterialResultaCardComponent';

const ResultsWithCards = ({ totalsArray, options}) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            {/* Muestra de resultados */}
            <Card variant="outlined" sx={{ margin: 2, flex: 1 }}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                        Resultados
                    </Typography>

                    <Box sx={{ marginBottom: 2 }}>
                        <Typography variant="body1">
                            <strong>Memento:</strong> {totalsArray.mementoMin} - {totalsArray.mementoMax} / {totalsArray.mementoAvg}
                        </Typography>
                    </Box>

                    <Box sx={{ marginBottom: 2 }}>
                        <Typography variant="body1">
                            <strong>Profit ETH:</strong> {totalsArray.totalMinEth} - {totalsArray.totalMaxEth} / {totalsArray.totalAvgEth}
                        </Typography>
                    </Box>

                    <Box sx={{ marginBottom: 2 }}>
                        <Typography variant="body1">
                            <strong>Profit USD:</strong> {totalsArray.totalMinUsd} - {totalsArray.totalMaxUsd} / {totalsArray.totalAvgUsd}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>

            {/* Memento Cards */}
            <Box sx={{ display: 'flex', flexDirection: 'column', margin: 2 }}>
                {options
                .filter(option => option.mementoAvg !== 0) // Filtra las opciones
                .map(option => (
                    <MementoCard key={option.id} data={option} />
                ))}
            </Box>
        </Box>
    );
};

export default ResultsWithCards;
