import React from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material'
import {Link} from 'react-router-dom'

export default function ProjectCard({to,image,title,description}) {
  return (
    <div>
      <Card sx={{maxWidth:300}}>
        <CardMedia component={'img'} height="140" image={image} />
      
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title} 
            </Typography>

            <Typography variant="body2">
                {description}
            </Typography>
        </CardContent>

        <CardActions>
            <Link to={to}><Button size="small" color="primary">Show project</Button></Link>
        </CardActions>
      </Card>
    </div>
  )
}
