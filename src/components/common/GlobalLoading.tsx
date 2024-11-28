import { useEffect, useState } from "react";

import { useAppSelector } from '../../hook/hook';

const GlobalLoading = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { isShowGlobalLoading } = useAppSelector((state) => state.globalLoading);

	useEffect(() => {
		if (isShowGlobalLoading) {
			setIsLoading(true);
		} else {
			setTimeout(() => {
				setIsLoading(false);
			}, 500);
		}
	}, [isShowGlobalLoading]);
	return (
        <>
            { isLoading && (
                <div className="loading-spinner-container">
                    <div className="loading-spinner"></div>
                </div>
            ) }
        </>
	);
};

export default GlobalLoading;
