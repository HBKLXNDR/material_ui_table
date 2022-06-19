import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

import {BasketItem} from "../BasketItem/BasketItem";

const Basket = (props) => {
    const {
        cartOpen,
        closeCart = Function.prototype,
        order = [],
        removeFromOrder
    } = props;

    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={closeCart}
        >
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary="Корзина" />
                </ListItem>
                <Divider />

                {!order.length ? (
                    <ListItem>The bag is empty!</ListItem>
                ) : (
                    <>
                        {order.map((item) => (
                            <BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item} />
                        ))}
                        <Divider />
                        <ListItem>
                            <Typography sx={{fontWeight: 700}}>
                                General cost:{' '}
                                {order.reduce((acc, item) => {
                                    return acc + item.price * item.quantity;
                                }, 0)}{' '}
                                UAH.
                            </Typography>
                        </ListItem>
                    </>
                )}

            </List>
        </Drawer>
    )
}

export {Basket}