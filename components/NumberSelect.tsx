import React from 'react';

interface Props {
    value: number;
    label: string;
    onChange?: (value: number) => void;
}
const NumberSelect: React.FC<Props> = ({ value, label, onChange }) => {
    const options = [1, 2, 3, 4, 5];
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = parseInt(event.target.value, 10);
        if (onChange) {
            onChange(newValue);
        }
    };
    return (
        <div className={"w-full mt-2 flex flex-col "}>
            <label htmlFor={label}>{label}</label>
            <select id={label} className={"border px-6 py-1 w-[30%] rounded-md "} value={value} onChange={handleChange}>

                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};


export default NumberSelect