import Image from "next/image";
import searchIcon from "./../../../public/assets/images/search.svg";

interface SearchBarProps {
    search: string;
    onChange: (value: string) => void;
    placeholder: string;
}

const SearchBar = (props: SearchBarProps) => {
    const { search, onChange, placeholder } = props;
    return (
        <div className="search__container">
            <input
                type="text"
                placeholder={placeholder}
                value={search}
                onChange={(e) => onChange(e.target.value)}
                className="search__input"
            />
            <div className="search__icon">
                <Image src={searchIcon} alt="search" />
            </div>
            <style jsx>{
            `.search__container {
                position: relative;
                display: flex;
                align-items: center;
                width: 300px;
            }
  
            .search__input {
                width: 100%;
                padding: 10px 40px 10px 15px;
                border: 1px solid #ccc;
                border-radius: 100px;
                font-size: 16px;
                outline: none;
            }
  
             .search__icon {
                position: absolute;
                right: 12px;
                width: 20px;
                height: 20px;
            }
        `}
            </style>
        </div>
    );
};

export default SearchBar;
