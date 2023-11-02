import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import React, {DOMAttributes, PropsWithChildren, RefAttributes} from "react";
import styles from "./index.module.css";
import classMix from "../../../util/classMix";

export default function Index(props: PropsWithChildren<{
    icon?: IconProp,
    className?: string
    faProps?: Omit<FontAwesomeIconProps, "className" | "icon">,
    disabled?: boolean
}> & DOMAttributes<HTMLButtonElement> & RefAttributes<HTMLButtonElement>) {
    const {children, icon, className, ...buttonProps} = props;
    return (
        <button {...buttonProps} className={classMix(
            "btn",
            className
        )}>
            {icon && <FontAwesomeIcon
                {...props.faProps}
                className={styles.iconButtonIcon}
                icon={icon}
            />} {children}
        </button>
    );
}
