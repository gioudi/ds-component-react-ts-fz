import { useState } from "react";

interface FilterProps {
    options: string[];
    variant?: 'dotted' | 'solid';
    onSelect: (selectedOption: string) => void;
}

const Filter: React.FC<FilterProps> = ({options,onSelect, variant}) => {
    const [selectedOption,setSelectedOption] = useState(options[0]);

    const handleSelect = (option: string)=> {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <div className={`fz-filter fz-filter--${variant}`}>
            {options.map((option)=>
                <button className={`fz-filter__option ${selectedOption === option ? 'active': ''}`}
                onClick={()=> handleSelect(option)}>
                    {option}
                </button>
            )}
        </div>
    )
};

export default Filter;