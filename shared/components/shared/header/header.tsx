"use client";

import React from "react";
import { Select } from "./select";
import { Bar } from "./bar";
import { Tabs } from "./tabs";
import { Search } from "./search";
import { Logo_H_Desctop } from "../../svg/logo_H_Desctop";
import { CardsProps } from "@/shared/interface/cards";
import { RegionLink } from "../region-link";
import { Logo_Mob } from "../../svg/logo-mob";
import { SearchIcon } from "../../svg/search";
import { Burger } from "../../svg/burger";
import { Cross } from "../../svg/cross";


interface Props {
  data: CardsProps[];
}

export const Header: React.FC<Props> = ({data}) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);
  return (
    <header className="header">
      <div className="header__row">
        <Logo_Mob className="header__logo-mob"/>
        <Search
          isOpen={isSearchOpen}
          onOpen={() => setIsSearchOpen(true)}
          onClose={() => setIsSearchOpen(false)}
        />
        {!isSearchOpen && (
          <>
            <Tabs />
            <RegionLink href="/" className="header__row-logo">
              <Logo_H_Desctop className="header__row-logo" />
            </RegionLink>
            <Select />
          </>
        )}
        <div className="header__info-mob">
          <div className="header__mob-search">
            <div className="header__mob-search-icon">
              <SearchIcon />
            </div>
            <input 
              type="text" 
              placeholder="Найти в новостях" 
              className="header__mob-input"
            />
          </div>
          <div 
            className="header__burger-circle" 
            onClick={() => setIsBurgerOpen(!isBurgerOpen)}
          >
            <Burger />
          </div>
        </div>
      </div>
      <Bar Topics={data}/>
      {isBurgerOpen && (
        <div className="burger-block">
          <div className="header__burger-circle cross" onClick={() => setIsBurgerOpen(false)}>
            <Cross />
          </div>
          <div className="header__burger-line"></div>
          <h6 className="header__burger-title">Регион</h6>
          <Select />
        </div>
      )}
    </header>
  );
};
