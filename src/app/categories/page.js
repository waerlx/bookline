"use client";
import { useState, useEffect } from 'react';
import UserTabs from '@/components/layout/UserTabs'; // Make sure this import matches your actual component file structure
import { useProfile } from '@/components/layout/UseProfile'
import { resolve } from 'path';
import toast from 'react-hot-toast';


export default function CategoriesPage() {
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  const [editedCategory, setEditedCategory] = useState(null);
  // const { loading: profileLoading, data: profileData } = useProfile();
  useEffect(() => {
    fetchCategories();

  }, []);
  function fetchCategories() {
    fetch('/api/categories').then(res => {
      res.json().then(categories => {
        setCategories(categories);

      });
    })
  }


  async function handleCategorySubmit(ev) {
    ev.preventDefault();

    try {
      const creationPromise = new Promise(async (resolve, reject) => {
        try {
          const data = {
            name: categoryName,
          };
          if (editedCategory) {
            data._id = editedCategory._id;
          }
          const response = await fetch('/api/categories', {
            method: editedCategory ? 'PUT' : 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
          });
          setCategoryName('');
          fetchCategories();
          setEditedCategory(null);
          if (response.ok) {
            resolve();
          } else {
            reject(new Error('Ошибка при создании категории'));
          }
        } catch (error) {
          reject(error);
        }
      });

      await toast.promise(creationPromise, {
        loading: editedCategory
          ? 'Updating category...'
          : 'Создание категории...',
        success: editedCategory ? 'Category updated' : 'Категория создана!',
        error: 'Ошибка при создании категории',
      });
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      toast.error('Не удалось создать категорию. Попробуйте еще раз.');
    }
  }
  // if (profileLoading) {
  //   return 'Loading user info...';
  // }
  // if (!profileData.admin) {
  //   return 'You are not admin';

  // }


  return (
    <section className="mt-8 max-w-md mx-auto ">
      <UserTabs isAdmin={true} />
      <form className='mt-6' onSubmit={handleCategorySubmit}>
        <div className="flex gap-2 items-end">
          <div className="grow  ">
            <label className='mt-2' >
              {editedCategory ? 'Update category ' : 'New category name'}
              {editedCategory && (
                <>:<b>{editedCategory.name}</b></>
              )}
            </label>
            <input className='mt-0' type="text" value={categoryName} onChange={ev => setCategoryName(ev.target.value)} />
          </div>
          <div className="">
            <button className='bg-primary text-white border border-primary' type="submit">{editedCategory ? 'Update' : 'Create'}</button>
          </div>
        </div>

      </form>
      <div>
        <h2 className='mt-8 text-sm text-gray-600'>Edit category:</h2>
        {categories?.length > 0 && categories.map(c => (
          <button onClick={() => {
            setEditedCategory(c);
            setCategoryName(c.name);
          }} className='button bg-gray-200 rounded-xl p-2 px-4 flex gap-2 mb-2 text-gray-500'>
            {/* <span>edit category:</span> */}
            <span className=''>{c.name}</span>

          </button>
        ))}
      </div>
    </section>
  );
}
