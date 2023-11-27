import React, { useEffect, useState } from 'react'
import Countdown from "react-countdown";
import moment from "moment/moment";
import { Button, Popover } from "antd";
import { Modal, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useSelector } from 'react-redux';
import { Staking, Staking_Abi, tokenStaking, tokenStaking_Abi } from '../../utilies/constant';
import Web3 from 'web3';
import { toast } from 'react-toastify';
import Connent from '../Connent/Connent';
import './mylockStyle.css'

export default function Mylock({ setShoww, check }) {
    let { provider, acc, providerType, web3 } = useSelector(
        (state) => state.connectWallet
    );
    const [UserInformationStak, setUserInformationStak] = useState();
    const [spinner, setspinner] = useState(false)


    const checkBalance = async () => {
        const webSupply = new Web3(
            "https://rpc-main-1.archiechain.io"
        );
    
        let stakingContractOf = new webSupply.eth.Contract(tokenStaking_Abi, tokenStaking);
        
        if (acc != null) {
            


            let UserInformation = await stakingContractOf.methods.UserInformation(acc).call();
            console.log("UserInformation", UserInformation );

            let array1 = UserInformation[0];
            let array2 = UserInformation[1];
            let array3 = UserInformation[2];
            let myArray = [];
            let currentTime = Math.floor(new Date().getTime() / 1000.0);
            for (let i = 0; i < array1.length; i++) {
                // let date =new Date(Number(array3[i])*1000).toUTCString();
                let currentTimestamp = array3[i];
                console.log("Data", currentTimestamp);
                // console.log("Type", Number(currentTimestamp) + Number(60) * array2[i]);
                let date = moment(new Date(array3[i]*1000)).format("DD-MM-YYYY");
                let obj = {
                    address: acc,
                    amount: web3.utils.fromWei(array1[i]),
                    unLoackTime: Number(currentTimestamp) + Number(86400) * array2[i],
                    LockTime: date,
                };
                myArray = [...myArray, obj];
            }

            setUserInformationStak(myArray);

        }


    };


    useEffect(() => {
        checkBalance()
    }, [spinner])


    const Completionist = () => {


        return (
            <>
                <div className="text_days fs-5 ">Unstaked Time Reached!</div>
            </>

        )


    }


    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {

        if (completed) {

            return <Completionist />;
        } else {


            return (
                <div className="text_days fs-5 ">
                    {/* {days} D {hours} H {minutes} M {seconds} S */}
                    {days}d : {hours}h : {minutes}m : {seconds}s


                </div>
            );
        }
    };

    // console.log("timecompleted",timecompleted);
    const confirm = (index) => {

        Modal.confirm({
            title: "Confirm",
            icon: <ExclamationCircleOutlined />,
            content:
                "Before unstake time 10% will be deducted from your staked amount",
            okText: "Continue",
            cancelText: "Cancel",
            onOk: () => unstake(index),

        })


    };



    const unstake = async (index) => {
        try {
            const webSupply = new Web3(
                "https://rpc-main-1.archiechain.io"
            );

            let stakingcont=new webSupply.eth.Contract(tokenStaking_Abi, tokenStaking);
        let pausestatus= await stakingcont.methods.paused().call();


      
            setspinner(true)
            let stakingContractOf
            stakingContractOf = new web3.eth.Contract(tokenStaking_Abi, tokenStaking);
            if(pausestatus==false){
            await stakingContractOf.methods.harvest([index]).send({
                from: acc,
            });
            toast.success("Token Unstaked Successfully");
            setspinner(false)
        } else{
            toast.error("Staking Pool is paused.")

        }}
        catch (e) {
            console.log("Error while calling Unstaking function", e);
            setspinner(false)

        }
    };
    return (
        <div>

            <div className="container-fluid p-0 " >

                <>
                    <div className=''>
                        <table class="table mt-5 text-white h-100 " >
                            <thead>
                                <tr>
                                    <th scope="col">Address</th>
                                    <th scope="col">Staked Amount</th>
                                    <th scope="col">Staked Time</th>
                                    <th scope="col">Remaining Time to Unstaked </th>
                                    <th scope="col">Unstaked</th>
                                </tr>
                            </thead>
                            <tbody className="text-white " >
                                {UserInformationStak?.map((items, index) => {

                                    console.log("unloacktime", index);
                                    return (
                                        <>
                                            {
                                                items.amount == 0 ?
                                                    <></>
                                                    :
                                                    <>
                                                        <tr>
                                                            <th scope="row">
                                                                {items.address?.substring(0, 4) +
                                                                    "..." +
                                                                    items.address?.substring(items.address?.length - 4)}
                                                            </th>
                                                            <td>{items.amount}</td>
                                                            <td>{items.LockTime}</td>
                                                            <td>
                                                                {" "}
                                                                <Countdown
                                                                    date={
                                                                        Date.now() +
                                                                        (parseInt(items.unLoackTime) * 1000 - Date.now())
                                                                    }
                                                                    renderer={renderer}
                                                                />
                                                            </td>

                                                            <td>

                                                                <Button

                                                                    onClick={() => check == "two" ? unstake(index) : parseInt(items.unLoackTime) >= parseInt(Date.now() / 1000) ? confirm(index) : unstake(index)}
                                                                    // onClick={() => timecompleted==false ? unstake(index):confirm(index)}
                                                                    className="unlockBTN text-white"
                                                                    disabled={check == "two" ? parseInt(items.unLoackTime) >= parseInt(Date.now() / 1000) ? true : false : false}
                                                                >
                                                                    UnStake
                                                                </Button>
                                                            </td>
                                                            {/* <td><button className="btn btn-success unlockBTN" title="Tooltip on top">UnLock</button></td> */}
                                                        </tr>
                                                    </>

                                            }

                                        </>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </>

            </div>

        </div>
    )
}
