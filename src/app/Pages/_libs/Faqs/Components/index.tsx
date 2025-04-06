
import { Minus, Plus } from "@/app/assets/asset";
import { FAQType } from "@/app/constants/Faqs/content";
  
export const FAQs: React.FC<FAQType> = ({ expand, setExpand, title, content }) => (
    <div className="mt-[24px]">
      <div className="flex  items-center text-[#344054] justify-between text-[20px] font-[500] leading-[32px]">
        <span>{title}</span>
        <span className="cursor-pointer" onClick={() => setExpand(!expand)}>
         {expand ?  <Minus /> : <Plus/> }
        </span>
      </div>
      <div className={`mt-[16px] text-[#344054] ${expand ? 'block' : 'hidden'}`}>
        {content}
      </div>
    </div>
  );