"use client";
import { useProfile } from "../../../../components/UseProfile";
import { useEffect, useState } from "react";
import UserTabs from "@/components/layout/UserTabs";
import EditableImage from "@/components/layout/EditableImage";
import toast from "react-hot-toast";
import Link from "next/link";
import Left from "@/components/icons/Left";
import { redirect, useParams } from "next/navigation";
import Plus from "@/components/icons/Plus";
import Trash from "@/components/icons/Trash";
import MenuItemPriceProps from "@/components/layout/menuItemPriceProps";
import DeleteButton from "@/components/DeleteButton"

export default function EditMenuItemPage() {
    const { id } = useParams();
    const [image, setImage] = useState('');
    const { loading, data } = useProfile();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [redirectToItems, setRedirectToItems] = useState(false);
    const [price, setPrice] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [covers, setCovers] = useState([]);
    const [paper, setPapers] = useState([]);



    // function addCover() {
    //     setCovers(oldCovers => [...oldCovers, { name: '', price: 0 }]);
    // }
    // function editCover(ev, index, prop) {
    //     const newValue = ev.target.value;
    //     setCovers(prevCovers => {
    //         const newCovers = [...prevCovers];
    //         newCovers[index][prop] = newValue;
    //         return newCovers;
    //     });
    // }
    // function removeCover(indexToRemove) {
    //     setCovers(prev => prev.filter((v, index) => index !== indexToRemove));
    // }


    useEffect(() => {
        fetch('/api/menu-items').then(res => {
            res.json().then(items => {
                const item = items.find(i => i._id === id);
                // console.log(item)
                setImage(item.image);
                setName(item.name);
                setDescription(item.description);
                setPrice(item.price);
                setAuthor(item.author);
                setCategory(item.category);
                setCovers(item.covers);
                setPapers(item.paper);


            });
        })
    }, []);

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        const data = { name, description, price, author, category, covers, paper, image, _id: id };
        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/menu-items', {
                method: 'PUT',

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

    async function handleDeleteClick() {
        const promise = new Promise(async (resolve, reject) => {
            const res = await fetch('/api/menu-items?_id=' + id, {
                method: 'DELETE',
            });
            if (res.ok)
                resolve();
            else
                reject();
        });

        await toast.promise(promise, {
            loading: 'Deleting...',
            success: 'Deleted',
            error: 'Error',
        });

        setRedirectToItems(true);
    }
    useEffect(() => {
        fetch('/api/categories').then(res => {
            res.json().then(categories => {
                setCategories(categories);
            });
        });
    }, []);



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
        <section className="mt-8">
            <UserTabs isAdmin={true} />
            <div className="max-w-2xl mx-auto mt-8">
                <Link
                    className='button flex justify-center gap-2'
                    href={'/menu-items'}>
                    <Left />
                    <span>Show all menu items</span>

                </Link>
            </div>
            <form onSubmit={handleFormSubmit} className='mt-8 max-w-2xl mx-auto'>
                <div className="grid gap-4 items-start "
                    style={{ gridTemplateColumns: '.3fr .7fr' }}>
                    <div className="">
                        <EditableImage link={image} setLink={setImage} />
                    </div>
                    <div className='grow'>
                        <label >Название</label>
                        <input
                            value={name}
                            onChange={ev => setName(ev.target.value)}
                            type="text" />
                        <label >Автор</label>
                        <input
                            value={author}
                            onChange={ev => setAuthor(ev.target.value)}
                            type="text" />
                        <label >Жанр</label>
                        <select value={category} onChange={ev => setCategory(ev.target.value)}>
                            {categories?.length > 0 && categories.map(c => (
                                <option key={c._id} value={c._id}>{c.name}</option>
                            ))}
                        </select>


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
                        <MenuItemPriceProps name={'Covers'} addLabel={'Add type of Covrers'} props={covers} setProps={setCovers} />
                        <MenuItemPriceProps name={'Paper'} addLabel={'Add type of papers prices'} props={paper} setProps={setPapers} />

                        <button className='bg-primary text-white ' type="submit">Save</button>
                    </div>

                </div>
            </form>
            <div className="max-w-md  mx-auto mt-2">
                <div className=" max-w-xs ml-auto pl-4">
                    <DeleteButton label="Delete this menu item"
                        onDelete={handleDeleteClick}></DeleteButton>
                </div>
            </div>
        </section>
    );
}