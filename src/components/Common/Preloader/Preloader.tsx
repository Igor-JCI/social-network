import React from "react";
import {Flex, Spin} from 'antd';

export const Preloader = () => {
    return <div>
        <Flex gap="large" vertical>
            <Flex gap="large">
                <Spin tip="Loading" size="large">
                    <div className="content"/>
                </Spin>
            </Flex>
        </Flex>
    </div>
}

