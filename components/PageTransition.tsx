import React, {ReactNode} from "react";
import {useRouter} from "next/router";

const PageTransition: React.FC<{ children: ReactNode }> = ({children}) => {
    const router = useRouter();

    const [opacity, setOpacity] = React.useState('opacity-100');

    React.useEffect(() => {
        setOpacity('opacity-0');
        const timeout = setTimeout(() => {
            setOpacity('opacity-100');
        }, 300);

        return () => {
            clearTimeout(timeout);
        };
    }, [router.asPath]);

    return (
        <div className={`transition-opacity ${opacity}`} key={router.route}>
            {children}
        </div>
    );
};


export default PageTransition