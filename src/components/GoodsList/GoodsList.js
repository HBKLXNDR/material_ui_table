import React from 'react';
import {Grid} from "@mui/material";

import {GoodsItem} from "../GoodsItem/GoodsItem";

const GoodsList = (props) => {
    const { goods, setOrder } = props;

    return (
        <Grid container spacing={2}>
            {goods.map((item) => (
                <GoodsItem key={item.id} setOrder={setOrder} {...item} />
            ))}
        </Grid>
    );
};

export {GoodsList};