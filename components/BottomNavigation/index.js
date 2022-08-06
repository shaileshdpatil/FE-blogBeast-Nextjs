import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import {Box} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import {useRouter} from "next/router";
import FeedIcon from '@mui/icons-material/Feed';

export default function LabelBottomNavigation() {
    const router = useRouter()
    const [value, setValue] = React.useState('/');

    const handleChange = (event, newValue) => {
        router.push(newValue);
        setValue(newValue);
    };

    return (
        <Box className="mobile_navigator">
            <BottomNavigation sx={{width: 500}} value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Home"
                    value="/"
                    icon={<HomeIcon/>}
                />
                <BottomNavigationAction
                    label="Blogs"
                    value="/blog"
                    icon={<FeedIcon/>}
                />
                <BottomNavigationAction
                    label="More"
                    value="/category"
                    icon={<FolderIcon/>}
                />
                <BottomNavigationAction
                    label="Contact"
                    value="/about"
                    icon={<PermContactCalendarIcon/>}
                />
            </BottomNavigation>
        </Box>
    );
}
