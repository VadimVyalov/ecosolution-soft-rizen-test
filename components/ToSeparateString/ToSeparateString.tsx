
import cn from "@/helpers";
const ToSeparateString = ({ num, classname = '' }: { num: Number, classname?: string }) => {

    const aar = num.toFixed(0).split('').reverse().map((c, i) => i > 0 && i % 3 === 0 ? c + '.' : c).reverse().join('').split('')

    return (
        <div className={cn("flex justify-center ", classname)}>
            {aar.map((d, i) => <span key={`${d}-${i}-${d}`}
                className="w-[24px] [&:nth-last-child(4n)]:w-[10px] text-center
                    t:w-[48px] t:[&:nth-last-child(4n)]:w-[18px]
                    d:w-[82px] d:[&:nth-last-child(4n)]:w-[32px]">{d}</span>)}
        </div>

    )

}

export default ToSeparateString