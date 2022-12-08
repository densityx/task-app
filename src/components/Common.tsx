import styled from '@emotion/styled'

const whiteColor = '#ffffff';
const primaryColor = '#5285EC';
const paperColor = '#FFFFFF';
const smShadowColor = '#0000000A';
const mdShadowColor = '#00000014';
const shadowColor = '#00000029';
const textColor = '#537178';
const inputColor = '#EEF1F8';
const searchInputColor = '#D9DFEB';
const inputPlaceholderColor = '#7A7D7E';
const navbarMenuColor = '#6D8187';
const piePendingColor = '#E8ECEC';

const smSpacing = '8px';
const mdSpacing = '12px';
const lgSpacing = '24px';

const lineHeight = '18px';
const lgLineHeight = '24px';

const fontSize = '14px';
const lgFontSize = '20px';

const breakpoints = [640, 1024];

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export const Main = styled.main((props: { loginPage?: boolean }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: props.loginPage ? 0 : '22px',
    justifyContent: props.loginPage ? 'center' : 'flex-start',
    height: '100vh',
    width: '100%',
}))

export const Container = styled.div({
    width: '100%',
    maxWidth: '960px',
    margin: '0 auto',
})

export const Button = styled.button({
    display: 'flex',
    justifyContent: 'center',
    padding: '11px 22px',
    backgroundColor: primaryColor,
    border: 'none',
    borderRadius: smSpacing,
    fontSize: fontSize,
    lineHeight: lineHeight,
    color: whiteColor,
    '&:focus-visible': {
        outlineColor: primaryColor,
    },
    '&:hover': {
        cursor: 'pointer',
        opacity: '90%',
    }
});

export const Grid = styled.div({
    display: 'grid',
    gridTemplateColumns: 'minmax(10px, 1fr)',
    gridRowGap: '12px',
    [mq[0]]: {
        gridTemplateColumns: 'minmax(10px, 1fr) minmax(10px, 1fr) minmax(10px, 1fr)',
        gridRowGap: 0,
    },
    gridColumnGap: '24px',
    width: '100%',
})

export const Card = styled.div((props: { shadow?: string, smBorder?: boolean }) => ({
    backgroundColor: paperColor,
    boxShadow: `0px 3px 6px ${props.shadow == 'sm' ? smShadowColor : (props.shadow == 'md' ? mdShadowColor : shadowColor)}`,
    borderRadius: props.smBorder ? 0 : mdSpacing,
    [mq[0]]: {
        borderRadius: mdSpacing,
    },
    boxSizing: 'border-box',
}));

export const ModalContainer = styled.div({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 10,
    // marginTop: '-22px',
    display: 'flex',
    [mq[0]]: {
        alignItems: 'center',
    },
    justifyContent: 'center',
    backgroundColor: '#00000033',
    height: '100%',
    width: '100%',
});

export const Modal = styled.div((props: { shadow?: string }) => ({
    position: 'absolute',
    top: '84px',
    [mq[0]]: {
        top: 'initial',
    },
    backgroundColor: paperColor,
    boxShadow: `0px 3px 6px ${props.shadow == 'sm' ? smShadowColor : (props.shadow == 'md' ? mdShadowColor : shadowColor)}`,
    borderRadius: mdSpacing,
    boxSizing: 'border-box'
}));

export const Input = styled.input({
    padding: '11px 16px',
    border: 'none',
    boxSizing: 'border-box',
    borderRadius: smSpacing,
    backgroundColor: inputColor,
    fontSize: fontSize,
    lineHeight: lineHeight,
    color: inputPlaceholderColor,
    '&:focus-visible': {
        outlineColor: primaryColor,
    }
})

export const SearchInput = styled.input({
    padding: '11px 16px 11px 41px',
    border: 'none',
    borderRadius: smSpacing,
    backgroundColor: searchInputColor,
    fontSize: fontSize,
    lineHeight: lineHeight,
    color: inputPlaceholderColor,
    width: '100%',
    [mq[0]]: {
        minWidth: '244px',
    },
    '&:focus-visible': {
        outlineColor: primaryColor,
    }
})

export const Heading = styled.h2({
    margin: 0,
    color: textColor,
    fontSize: lgFontSize,
    lineHeight: lgLineHeight,
    fontWeight: 500,
})


export const Navbar = styled.nav({
    paddingTop: mdSpacing,
    paddingBottom: mdSpacing,
    paddingLeft: lgSpacing,
    paddingRight: lgSpacing,
    [mq[0]]: {
        padding: mdSpacing,
    },
    backgroundColor: paperColor,
    boxShadow: `0px 3px 6px ${shadowColor}`,
    boxSizing: 'border-box'
})

export const NavbarMenu = styled.span({
    color: navbarMenuColor,
})

export const Pie = styled.div((props: { done: number }) => ({
    width: '103px',
    height: '103px',
    backgroundImage: `conic-gradient(${piePendingColor} ${100 - props.done}%, ${primaryColor} ${100 - props.done}%)`,
    borderRadius: '50%',
    transform: 'rotate(90deg)'
}))


export const LoadingBar = styled.div((props: { width: number }) => ({
    width: `${props.width}%`,
    height: '12px',
    borderRadius: '8px',
    backgroundColor: inputColor,
}))