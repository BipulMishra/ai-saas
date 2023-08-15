"use client";

import {useEffect} from 'react';

import {Crisp} from "crisp-sdk-web";

export const CrispChat =()=>{
    useEffect(()=>{
        Crisp.configure("ca77a745-5565-4dc1-a70b-a779e28dfabb");

    },[]);
    return null;
}
