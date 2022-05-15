import { Avatar, Container } from "@mui/material";
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

import { useEffect, useState } from "react"
import BlogCard from "./card";
import { fetchDeets } from '../api/import';
import { Box } from "@mui/system";

const BlogList = () => {
  const [profile, setProfile] = useState({
    description: '',
    image: '',
    author: ''
  });
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    /*eslint no-undef: "off"*/
    fetchDeets().then((r=[]) => {
      setProfile(r[0])
      setBlogs(r[1]);
    })
  }, [])
  return (
    <Box>
      <Container maxWidth='md' sx={{ my: 4, display: 'flex', alignItems: 'center'}}>
        <Avatar src={profile.image} sx={{width: 50, height: 50}} />
        <Typography variant="h5" fontWeight={700} sx={{mx: 3}}>{profile.author}</Typography>
      </Container>
      <Container maxWidth='md' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {blogs.map((post, index) => {
          return (
            <Card key={'blog'+index} sx={{width: "250px", m: 1}}>
              <CardMedia image={post.thumbnail} component={'img'} alt={post.title} />
              <CardContent>
                <Typography variant="h6" fontWeight={700}>{post.title}</Typography>
                <Typography variant="body1" component={'div'} sx={{my: 2}}>{post.description}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => window.location.href=`${post.link}`}>Read more</Button>
              </CardActions>
            </Card>
          )
        })}
      </Container>
      <Container maxWidth={'md'} sx={{mt:4}}>
        <Typography variant="caption" textAlign={'center'} component="div">Made by Noufal Rahman</Typography>
      </Container>
    </Box>
  )
}

export default BlogList;


// "<div class="medium-feed-item">
// <p class="medium-feed-image"><a href="https://ericadhawan.medium.com/the-dark-side-of-being-a-digital-native-a297a79b720?source=rss-de3ec8465341------2"><img src="https://cdn-images-1.medium.com/max/1890/1*jai6MlfTePMr3_fYftu0Bg.png" width="1890"></a></p>
// <p class="medium-feed-snippet">Gen Z’s anxiety at work is through the roof. Here’s what we can all do to help.</p>
// <p class="medium-feed-link"><a href="https://ericadhawan.medium.com/the-dark-side-of-being-a-digital-native-a297a79b720?source=rss-de3ec8465341------2">Continue reading on Medium »</a></p>
// </div>"

