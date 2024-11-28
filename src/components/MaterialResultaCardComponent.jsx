"use client";
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/joy';
import materialIcon from 'image/materialIcon.jpg'
import Image from 'next/image';

const MementoCard = ({ data }) => {
    return (
        <Card sx={{ width: 240, margin: 2}}>
            <CardContent>
                {/* Label */}
                <Typography variant="h6" fontWeight="bold" textAlign="center">
                    {data.label}
                </Typography>
                
                {/* imgGif */}
                <Box display="flex" justifyContent="center" mb={2}>
                    <Image
                        src={data.imgGif}
                        alt={data.label}
                        width={50} // Ancho especificado para optimización de Next.js
                        height={50} // Alto especificado para optimización de Next.js
                        style={{ objectFit: "contain", height: 50 }}
                    />
                </Box>

                {/* MementoMin - MementoMax */}
                <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
                    <Image
                        src={materialIcon}
                        alt="materialIcon"
                        width={20}
                        height={20}
                    />     
                    <Typography variant="body2">
                        {data.mementoMin} - {data.mementoMax}
                    </Typography>
                </Box>
                
                {/* minEth - maxEth */}
                <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
                    <Image
                        src="https://cdn.skymavis.com/ronin/2020/erc20/0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5/logo.png"
                        alt="Eth"
                        width={20}
                        height={20}
                    />                
                    <Typography variant="body2">
                        {data.minEth} - {data.maxEth}
                    </Typography>
                </Box>

                {/* minUsd - maxUsd */}
                <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
                    <Image
                        src="https://cdn.skymavis.com/ronin/2020/erc20/0x0b7007c13325c48911f73a2dad5fa5dcbf808adc/logo.png"
                        alt="Usd"
                        width={20}
                        height={20}
                    />
                    <Typography variant="body2">
                        {data.minUsd} - {data.maxUsd}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default MementoCard;
