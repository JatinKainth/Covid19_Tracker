import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";

function InfoBox({title, cases, total}) {
    return (
        <Card className="infoBox">
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>
                <h2 className="infobox__cases">{cases}</h2>
                <Typography className="infoBox__total" color="textSecoundary">
                    {total}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
