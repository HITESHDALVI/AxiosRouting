import React from 'react'

import Avatar from "@mui/material/Avatar";

export const AvatarTag = (user) => {
    return (
        <Avatar
            style={{
                width: "75px",
                height: "75px",
                textDecoration: "none",
                color: "white",
                backgroundColor: `hsl(` + Math.random() * 360 + `, 87%, 76%)`,
            }}
            alt={user.username}
            src={`/static/images/avatar/${user.username}`}
        />
    )
}
