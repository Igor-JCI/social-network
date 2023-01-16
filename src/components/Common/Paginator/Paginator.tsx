import React from "react";
import styles from "./Paginator.module.css";

type PaginatorType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    currentPage: number
}

const Paginator = (props: PaginatorType) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p => {
                return <span
                    className={props.currentPage === p ? styles.selectedPage : ''}
                    onClick={(e: React.MouseEvent<HTMLElement>) => {
                        props.onPageChanged(p)
                    }}>{p}</span>
            })}
        </div>
    )
}

export default Paginator
