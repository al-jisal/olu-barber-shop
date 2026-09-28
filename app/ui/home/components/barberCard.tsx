'use client';

interface BarberCardProps {
    imageSrc: string;
    altText?: string;
    captionText?: string;
    containerHeight?: React.CSSProperties['height'];
    containerWidth?: React.CSSProperties['width'];
    imageHeight?: number;
    imageWidth?: number;
    overlayContent?: React.ReactNode;
    displayOverlayContent?: boolean;
}

export default function BarberCard({
    imageSrc,
    altText = 'Tilted card image',
    containerHeight = '300px',
    containerWidth = '100%',
    imageHeight = 300,
    imageWidth = 300,
    overlayContent = null,
    displayOverlayContent = false
}: BarberCardProps) {

    return (
        <figure
            className="relative w-full h-full flex flex-col items-center justify-center"
            style={{
            height: containerHeight,
            width: containerWidth
            }}
        >
            <div
                className="relative "
                style={{
                    width: containerHeight,
                    height: containerHeight,
                }}
            >
                <img
                    src={imageSrc}
                    alt={altText}
                    draggable="false"
                    className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]"
                    width={imageWidth}
                    height={imageHeight}
                />

                {displayOverlayContent && overlayContent && (
                    <div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]">
                        {overlayContent}
                    </div>
                )}
            </div>

        </figure>
    );
}
