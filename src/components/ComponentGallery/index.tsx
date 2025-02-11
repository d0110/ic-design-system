import React from "react";
import { Link as GatsbyLink } from "gatsby";
import "./index.css";
import pagesData from "../../icds-pages-data.json";

import {
  Accordionlight,
  Alertlight,
  Backtotoplight,
  Badgelight,
  Breadcrumblight,
  Buttonlight,
  Cardlight,
  Checkboxlight,
  Chiplight,
  Classificationbannerlight,
  Datatablelight,
  Dateinputlight,
  Datalistlight,
  Datepickerlight,
  Dialoglight,
  Emptystatelight,
  Footerlight,
  Herolight,
  Linklight,
  Loadingindicatorlight,
  Multiselectlight,
  Pageheaderlight,
  Paginationlight,
  Popovermenulight,
  Radiobuttonlight,
  Searchbarlight,
  Sectioncontainerlight,
  Selectlight,
  Sidenavigationlight,
  Skeletonlight,
  Statustaglight,
  Stepperlight,
  Switchlight,
  Tabslight,
  Textfieldlight,
  Toastlight,
  Togglebuttonlight,
  Tooltiplight,
  Topnavigationlight,
  Treeviewlight,
  Typographylight,
  Accordiondark,
  Alertdark,
  Backtotopdark,
  Badgedark,
  Breadcrumbdark,
  Buttondark,
  Carddark,
  Checkboxdark,
  Chipdark,
  Classificationbannerdark,
  Datatabledark,
  Dateinputdark,
  Datalistdark,
  Datepickerdark,
  Dialogdark,
  Emptystatedark,
  Footerdark,
  Herodark,
  Linkdark,
  Loadingindicatordark,
  Multiselectdark,
  Pageheaderdark,
  Paginationdark,
  Popovermenudark,
  Radiobuttondark,
  Searchbardark,
  Sectioncontainerdark,
  Selectdark,
  Sidenavigationdark,
  Skeletondark,
  Statustagdark,
  Stepperdark,
  Switchdark,
  Tabsdark,
  Textfielddark,
  Toastdark,
  Togglebuttondark,
  Tooltipdark,
  Topnavigationdark,
  Treeviewdark,
  Typographydark,
  PlaceHolderlight,
  PlaceHolderdark,
} from "./ComponentImages";
import { useTheme } from "../../context/ThemeContext";
import { passImage } from "../../utils/helpers";

const ComponentImages: { [key: string]: any } = {
  Accordionlight,
  Accordiondark,
  Alertlight,
  Backtotoplight,
  Badgelight,
  Breadcrumblight,
  Buttonlight,
  Cardlight,
  Checkboxlight,
  Chiplight,
  Classificationbannerlight,
  Datatablelight,
  Dateinputlight,
  Datalistlight,
  Datepickerlight,
  Dialoglight,
  Emptystatelight,
  Footerlight,
  Herolight,
  Linklight,
  Loadingindicatorlight,
  Multiselectlight,
  Pageheaderlight,
  Paginationlight,
  PlaceHolderlight,
  PlaceHolderdark,
  Popovermenulight,
  Radiobuttonlight,
  Searchbarlight,
  Sectioncontainerlight,
  Selectlight,
  Sidenavigationlight,
  Skeletonlight,
  Statustaglight,
  Stepperlight,
  Switchlight,
  Tabslight,
  Textfieldlight,
  Toastlight,
  Togglebuttonlight,
  Tooltiplight,
  Topnavigationlight,
  Treeviewlight,
  Typographylight,
  Alertdark,
  Backtotopdark,
  Badgedark,
  Breadcrumbdark,
  Buttondark,
  Carddark,
  Checkboxdark,
  Chipdark,
  Classificationbannerdark,
  Datatabledark,
  Dateinputdark,
  Datalistdark,
  Datepickerdark,
  Dialogdark,
  Emptystatedark,
  Footerdark,
  Herodark,
  Linkdark,
  Loadingindicatordark,
  Multiselectdark,
  Pageheaderdark,
  Paginationdark,
  Popovermenudark,
  Radiobuttondark,
  Searchbardark,
  Sectioncontainerdark,
  Selectdark,
  Sidenavigationdark,
  Skeletondark,
  Statustagdark,
  Stepperdark,
  Switchdark,
  Tabsdark,
  Textfielddark,
  Toastdark,
  Togglebuttondark,
  Tooltipdark,
  Topnavigationdark,
  Treeviewdark,
  Typographydark,
};

const ComponentGallery: React.FC = () => {
  const { theme } = useTheme();
  const uniqueComponentDetails = [
    ...new Map(
      pagesData.data
        .filter(({ tabs }) => tabs)
        .map((item) => [item.title, item])
    ).values(),
  ];

  return (
    <ul className="card-container">
      {uniqueComponentDetails?.map(({ path, subTitle, title }) => (
        <li key={title}>
          <GatsbyLink to={path}>
            <ic-card-vertical message={subTitle} full-width clickable>
              <img
                src={
                  ComponentImages[title.replace(/[- ]/g, "") + theme] ||
                  passImage([PlaceHolderlight, PlaceHolderdark], theme)
                }
                slot="image-top"
                alt={title}
                width="100%"
                height="100%"
              />
              <ic-typography
                slot="heading"
                variant="h4"
                aria-label={`${title} component.`}
              >
                <h4>{title}</h4>
              </ic-typography>
            </ic-card-vertical>
          </GatsbyLink>
        </li>
      ))}
    </ul>
  );
};

export default ComponentGallery;
