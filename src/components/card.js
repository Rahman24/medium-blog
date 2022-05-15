import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

const BlogCard = (post) => {
  return (
    <Card>
      <CardMedia image={post.thumbnail} component={'img'} alt={post.title} />
      <CardContent>
        <Typography variant="h4">{post.title}</Typography>
        <Typography variant="body1" component={'div'}>{post.description}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => window.location.href=`${post.link}`}></Button>
      </CardActions>
    </Card>
  )
}

export default BlogCard;