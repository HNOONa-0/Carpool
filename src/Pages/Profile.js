import { Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
const Profile=()=>{
    const myimg="data:image/jpeg;base64,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"
    return(
        <div className="flex justify-center mt16">
            <Card
                sx={{display:'flex',justifyContent:'space-around'}}
            >
                <CardHeader
                    avatar={
                        <IconButton component="label" aria-label="upload picture">
                            <input hidden accept="image/*" type="file" />
                            <Avatar sx={{ width: 64, height: 64 }} 
                            src={myimg}
                            >
                            </Avatar>
                        </IconButton>
                    }
                >
                </CardHeader>
                <CardContent
                    sx={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}
                >
                    <Typography variant="h6">Name</Typography>
                    <Typography variant="h6">Email</Typography>
                    <Typography variant="h6">Phone</Typography>
                    <Typography variant="h6">Admin access</Typography>
                    <Typography variant="h6">Date joined</Typography>
                </CardContent>
                {/* <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions> */}
            </Card>
        </div>
    )
}
export default Profile;