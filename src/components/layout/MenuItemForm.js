import { useEffect, useState } from "react";
import EditableImage from "@/components/layout/EditableImage";
import { Old_Standard_TT } from "next/font/google";
import Trash from "@/components/icons/Trash"
import Plus from '@/components/icons/Plus'
import MenuItemPriceProps from "@/components/layout/menuItemPriceProps"
export default function MenuItemForm({ onSubmit, menuItem }) {
    const [image, setImage] = useState(menuItem?.image || '');
    const [name, setName] = useState(menuItem?.name || '');
    const [price, setPrice] = useState(menuItem?.price || '');
    const [author, setAuthor] = useState(menuItem?.author || '');
    const [genre, setGenre] = useState(menuItem?.genre || '');
    const [description, setDescription] = useState(menuItem?.description || '');
    const [covers, setCovers] = useState(menuItem?.covers || []);
    const [paper, setPapers] = useState(menuItem?.paper || []);



    return (
        <form
            onSubmit={ev => onSubmit(ev, {
                image, name, author, genre, description, price,covers, paper
            })
            }
            className='mt-8 max-w-md mx-auto'>
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
                    <input
                        value={genre}
                        onChange={ev => setGenre(ev.target.value)}
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
                    <MenuItemPriceProps name={'Covers'} addLabel={'Add type of Covrers'} props={covers} setProps={setCovers} />
                    <MenuItemPriceProps name={'Paper'} addLabel={'Add type of papers prices'} props={paper} setProps={setPapers} />


                    <button className='bg-primary text-white ' type="submit">Save</button>
                </div>

            </div>
        </form>
    );
}