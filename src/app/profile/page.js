"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import InfoBox from "@/components/layout/InfoBox";
import SuccessBox from "@/components/layout/SuccessBox";
import Image from "next/image";
// import toast, { Toaster } from 'react-hot-toast'
import toast, { Toaster } from 'react-hot-toast';
import Link from "next/link";
import UserTabs from "@/components/layout/UserTabs";
import EditableImage from "@/components/layout/EditableImage";


export default function ProfilePage() {
    const session = useSession();
    const [profileFetched, setProfileFetched] = useState(false);
    const [image, setImage] = useState('');
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [postalCode, setpostalCode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    
    const [isAdmin, setIsAdmin] = useState(false);
    const { status } = session;
    // console.log(session);

    useEffect(() => {
        if (status === 'authenticated') {
            (async () => {
                try {
                    const response = await fetch('/api/profile');
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    setImage(session.data.user.image)
                    setPhone(data.phone);
                    setStreetAddress(data.streetAddress);
                    setpostalCode(data.postalCode);
                    setCity(data.city);
                    setCountry(data.country);
                    setIsAdmin(data.admin);
                    setProfileFetched(true);
                } catch (error) {
                    console.error('Error fetching profile:', error);
                }
            })();
        }
    }, [session, status]);


    async function handleProfileInfoUpdate(ev) {
        ev.preventDefault();
        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('api/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: userName,
                    image,
                    streetAddress,
                    phone,
                    postalCode,
                    city,
                    country,
                }),
            });
            if (response.ok)
                resolve()
            else
                reject();
        });

        await toast.promise(savingPromise, {
            loading: 'Saving...',
            success: 'Profile saved!',
            error: 'Error',
        });



    }


    // async function handleFileChange(ev) {
    //     const files = ev.target.files;
    //     if (files?.length === 1) {
    //         const data = new FormData;
    //         data.set('file', files[0]);
    //         // console.log('hi')
    //         const response = await fetch('/api/upload', {
    //             method: 'POST',
    //             body: data,
    //         });
    //         const link = await response.json();
    //         console.log(link)
    //         setImage(link);
    //         if (response.ok) {
    //             toast('Uploading complete success')
    //         } else {
    //             toast.error('Upload error!')
    //         }
    //     }
    // }



    if (status === 'loading' || !profileFetched) {
        return 'Loading...';
    }


    if (status === 'unauthenticated') {
        return redirect('/login_page')
    }
    const userImage = session.data.user.image;
    return (

        <section className="mt-8">
            <UserTabs isAdmin={isAdmin}/>
            <div className=" max-w-2xl mx-auto ">

                <div className="flex gap-4 items-center mt-4">
                    <div className="">
                        <div className="p-2 rounded-lg relative">
                            <EditableImage link={image} setLink={setImage}/>

                        </div>
                    </div>

                    <form className="grow" onSubmit={handleProfileInfoUpdate}>
                        <label >First and last name</label>
                        <input type="text" placeholder="First and last name" value={userName} onChange={ev => setUserName(ev.target.value)} />


                        <input type="email" disabled={true} value={session.data.user.email} />
                        {/* <input type="text" placeholder="Street address"/>
                        <input type="text" placeholder="City"/>
                        <input type="text" placeholder="City"/> */}
                        <input type="tel" placeholder="Phone number" value={phone} onChange={ev => setPhone(ev.target.value)} />
                        <input type="text" placeholder="Street address" value={streetAddress} onChange={ev => setStreetAddress(ev.target.value)} />
                        <div className="flex gap-4">
                            <input type="text" placeholder="Postal code" value={postalCode} onChange={ev => setpostalCode(ev.target.value)}/>
                            <input type="text" placeholder="City" value={city} onChange={ev => setCity(ev.target.value)}/>
                        </div>
                        <input type="text" placeholder="Country" value={country} onChange={ev => setCountry(ev.target.value)}/>


                        <button type="submit">Save</button>

                    </form>
                </div>
            </div>
            {/* <p className="text-center text-lg">Welcome</p> */}
        </section >
    );
}
