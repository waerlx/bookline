import { useState } from "react";
import Plus from "@/components/icons/Plus";
import Trash from "@/components/icons/Trash";
import ChevronDown from "@/components/icons/ChevronDown"
import ChevronUp from "@/components/icons/ChevronUp"

export default function MenuItemPriceProps({ name, props, addLabel, setProps }) {
    const [isOpen, setIsOpen] = useState(false);
    // const [covers, setCovers] = useState([]);
    // function addProp() {
    //     setProps(oldProps => {
    //       return [...oldProps, {name:'', price:0}];
    //     });
    //   }

    function addProp() {
        setProps(oldProps => {
            // Убедитесь, что oldProps является массивом
            if (!Array.isArray(oldProps)) {
                oldProps = [];
            }
            return [...oldProps, { name: '', price: 0 }];
        });
    }

    function editProp(ev, index, prop) {
        const newValue = ev.target.value;
        setProps(prevCovers => {
            const newCovers = [...prevCovers];
            newCovers[index][prop] = newValue;
            return newCovers;
        });
    }
    function removeProp(indexToRemove) {
        setProps(prev => prev.filter((v, index) => index !== indexToRemove));
    }
    return (
        <div className="bg-gray-200 p-2 rounded-md mb-2">

            <button onClick={() => setIsOpen(prev => !prev)} className="inline-flex p-1 border-0 justify-start" type="button">
                {isOpen && (
                    <ChevronUp />
                )}
                {!isOpen && (
                    <ChevronDown />
                )}

                <span>{name}</span>
                <span>({props?.length})</span>

            </button>
            <div className={isOpen ? 'block' : 'hidden'}>
                {props?.length > 0 && props.map((cover, index) => (
                    <div className="flex items-end gap-2 ">
                        <div>
                            <label >Cover name</label>
                            <input
                                className=""
                                type="text"
                                placeholder="Cover name"
                                value={cover.name}
                                onChange={ev => editProp(ev, index, 'name')} />
                        </div>
                        <div>
                            <label >Extra price</label>
                            <input
                                className=""
                                type="text"
                                placeholder="Extra price"
                                value={cover.price}
                                onChange={ev => editProp(ev, index, 'price')} />
                        </div>
                        <div >
                            <button type="button"
                                onClick={() => removeProp(index)}
                                className="bg-white mb-2 px-2">
                                <Trash />
                            </button>
                        </div>

                    </div>
                ))}
                <button
                    type="button"
                    onClick={addProp}
                    className="bg-white flex justify-center items-center gap-2">
                    <Plus className="w-4 h-4" />
                    <span>
                        {addLabel}
                    </span>
                </button>

            </div>


        </div>
    );
}