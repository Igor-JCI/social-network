import React, {useState} from "react";
import styles from "./Paginator.module.css";
import cn from "classnames"
import {Button, Flex} from 'antd';

type PaginatorType = {
    totalItemsCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    currentPage: number,
    portionSize: 10
}

const Paginator = (props: PaginatorType) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize


    return (
        <div  >
            {portionNumber > 1 &&
                <Flex gap="small" wrap="wrap">
                    <Button className={styles.button} size={"small"} type="text" onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}>PREV</Button>
                </Flex>
                /*<button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</button>*/
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span
                        className={cn(
                            {[styles.selectedPage]: props.currentPage === p},
                            styles.pageNumber
                        )}
                        onClick={(e: React.MouseEvent<HTMLElement>) => {
                            props.onPageChanged(p)
                        }}>{p}</span>
                })}
            {
                portionCount > portionNumber &&
                <Flex gap="small" wrap="wrap">
                    <Button size={"small"} type="text" onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}>NEXT</Button>
                </Flex>
                /*<button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>*/
            }
        </div>
    )
}
export default Paginator
