/// <reference types="vite/client" />

// Image imports
declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.jpg' {
    const content: string;
    export default content;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

// Font imports
declare module '*.woff' {
    const content: string;
    export default content;
}

declare module '*.woff2' {
    const content: string;
    export default content;
}

declare module '*.ttf' {
    const content: string;
    export default content;
}

// Swiper CSS modules
declare module 'swiper/css' {
    const content: string;
    export default content;
}

declare module 'swiper/css/pagination' {
    const content: string;
    export default content;
}

declare module 'swiper/css/navigation' {
    const content: string;
    export default content;
}

declare module 'swiper/css/autoplay' {
    const content: string;
    export default content;
}
