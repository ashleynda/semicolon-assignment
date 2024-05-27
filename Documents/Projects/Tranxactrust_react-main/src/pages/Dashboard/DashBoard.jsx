import {LeftPane} from "../LeftPane/LeftPane";
import {RightPane} from "../RightPane/RightPane";
import {Assets} from "../Assets/Assets";
import {Store} from "../Store/Store";
import {useEffect, useRef, useState} from "react";
import { Balance } from "../Balance/Balance";
import {History} from "../History/History";
import React from 'react';

export let display;

export function DashBoard(){


    const [showAssets, setShowAssets] = useState(false);
    const [showStore, setShowStore] = useState(false);
    const [showBalance, setShowBalance] = useState(false);
    const [showHistory, setShowHistory] = useState(false);

    display = (pane) => {
        clear();

        switch (pane) {
            case 'assets':
                setShowAssets(true);
                break;
            case 'store':
                setShowStore(true);
                break;
            case 'balance':
                setShowBalance(true);
                break;
            case 'history':
                setShowHistory(true);
                break;
            default:
                setShowAssets(true);
                break;
        }
    }


    const clear = () => {
        setShowAssets(false);
        setShowStore(false);
        setShowBalance(false);
        setShowHistory(false);
    }

    const dashboardRef = useRef({display});
    useEffect(() => {
        dashboardRef.current.display('assets');
    }, []);

    return(
        <main className="">
        <div className="block md:flex w-full justify-center gap-4">
            <div className="flex px-8 w-96">
                <LeftPane/>
            </div>

            <div className="flex px-8">
                { 
                    showAssets && <Assets/> 
                }
                {
                    showStore && <Store/>
                }
                {
                    showBalance && <Balance/>
                }
                {
                    showHistory && <History/>
                }
            </div>

            <div className="flex flex-col">
                <RightPane/>
            </div>
        </div>
        </main>
    )
}



