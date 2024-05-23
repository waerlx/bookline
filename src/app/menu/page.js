import { Typography } from 'antd';
import MenuItem from '@/components/layout/menu/MenuItems';
export default function Menu() {
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center text-primary mb-4 mt-8'>Catalog</h1>
            <div className="grid grid-cols-5 gap-4">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />


            </div>
        </div>
    );
}