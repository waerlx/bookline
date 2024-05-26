"use client";
import { useProfile } from "../../../components/UseProfile";
import { useState } from "react";
import UserTabs from "@/components/layout/UserTabs";
import EditableImage from "@/components/layout/EditableImage";
import toast from "react-hot-toast";
import Link from "next/link";
import Left from "@/components/icons/Left";
import { redirect } from "next/navigation";
import MenuItemForm from "@/components/layout/MenuItemForm";
export default function NewMenuItemPage() {
    const [image, setImage] = useState('');
    const { loading, data } = useProfile();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [redirectToItems, setRedirectToItems] = useState(false);
    const [price, setPrice] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');

    async function handleFormSubmit(ev, data) {
        ev.preventDefault();
        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/menu-items', {
                method: 'POST',

                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (response.ok) {
                resolve();
            } else
                reject();
        });
        await toast.promise(savingPromise, {
            loading: 'Saving...',
            success: 'Profile saved!',
            error: 'Error',
        });
        setRedirectToItems(true);
        // return redirect('/menu-items')
        // setName('');
        // setImage('');


    }
    if (redirectToItems) {
        return redirect('/menu-items');
    }
    if (loading) {
        return 'Loading user info...';
    }
    if (!data.admin) {
        return 'You are not admin';
    }
    return (
        <section>
            <UserTabs isAdmin={true} />
            <div className="max-w-md mx-auto mt-8">
                <Link
                    className='button flex justify-center gap-2'
                    href={'/menu-items'}>
                    <Left />
                    <span>Show all menu items</span>

                </Link>
            </div>
            <MenuItemForm menuItem={null} onSubmit={handleFormSubmit}/>
        </section>
    );
}