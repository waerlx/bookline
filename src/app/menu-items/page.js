"use client";
import { useProfile } from '@/components/layout/UseProfile';
import UserTabs from '@/components/layout/UserTabs';
import EditableImage from '@/components/layout/EditableImage'
import { useState } from 'react';
import { resolve } from 'path';
import { rejects } from 'assert';
import toast from 'react-hot-toast';
export default function MenuItemsPage() {
    const [image, setImage] = useState('');
    const { loding, data } = useProfile();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        const data = {name,description,price,image};
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
        
    }
    if (loding) {
        return <p>Loading user info...</p>;
    }

    if (!data.admin) {
        return 'Not an admin.';
    }
    return (
        <section>
            <UserTabs isAdmin={true} />
            <form onSubmit={handleFormSubmit} className='mt-8 max-w-md mx-auto'>
                <div className="grid gap-4 items-start "
                    style={{ gridTemplateColumns: '.3fr .7fr' }}>
                    <div className="">
                        <EditableImage link={image} setLink={setImage} />
                    </div>
                    <div className='grow'>
                        <label >Item name</label>
                        <input
                            value={name}
                            onChange={ev => setName(ev.target.value)}
                            type="text" />

                        <label >Description</label>
                        <input
                            value={description}
                            onChange={ev => setDescription(ev.target.value)}
                            type="text" />

                        <label >Price</label>
                        <input
                            value={price}
                            onChange={ev => setPrice(ev.target.value)}
                            type="text" />
                        <button className='bg-primary text-white ' type="submit">Save</button>
                    </div>

                </div>
            </form>
        </section>
    )
}