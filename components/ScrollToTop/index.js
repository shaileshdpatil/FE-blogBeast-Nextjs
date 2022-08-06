import {Box, Fade, useScrollTrigger} from "@mui/material";

function ScrollTop(props) {
    const { children, params } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        if (params){
            const anchor = (event.target.ownerDocument || document).querySelector(params);
            if (anchor) {
                anchor.scrollIntoView({
                    block: 'center',
                });
            }
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                className={'scroll_to_top'}
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}
export default ScrollTop;
