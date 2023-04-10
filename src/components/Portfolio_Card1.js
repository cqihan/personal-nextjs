import { Card, Col, Row, Grid, Text, Popover, Button } from "@nextui-org/react";


const PopoverItem = (props) => {
  <>
    <Popover placement={"top-left"} className={``}>
      <Popover.Trigger>
        <Card.Image src={props.popover_image} className={`card-icon-type1`}
          css={{ bg: "black", br: "10px" }} height={40} width={40} alt="Personal Web Icon"
        />
      </Popover.Trigger>
      <Popover.Content isBlurred css={{ bgBlur: "#0f1114b5", br: "10px" }} >
        <Text css={{ p: "10px" }} color="#fff" size={12}>{props.popover_desc}</Text>
      </Popover.Content>
    </Popover>
  </>
}
export const Projects1 = () => (
  <>
    <div className={`project-card-container ubbmeta`} data-aos="fade-up">
      <div className={`project-desc-1`}>
      </div>

      <div className={`project-desc-2`}>
        <p>blah</p>
        <PopoverItem 
          popover_image="/assets/images/tools-icons/nextjs.png"
          popover_desc=""
        />
      </div>
    </div>

    <div className={`project-card-container washla`} data-aos="fade-up">
      <div className={`project-desc-1`}>
      </div>

      <div className={`project-desc-2`}>
        <p>blah</p>
        <PopoverItem 
          popover_image="/assets/images/tools-icons/nextjs.png"
          popover_desc=""
        />
      </div>
    </div>

    <div className={`project-card-container quickfix`} data-aos="fade-up">
      <div className={`project-desc-1`}>
      </div>

      <div className={`project-desc-2`}>
        <p>blah</p>
        <PopoverItem 
          popover_image="/assets/images/tools-icons/nextjs.png"
          popover_desc=""
        />
      </div>
    </div>

    <div className={`project-card-container akc`} data-aos="fade-up">
      <div className={`project-desc-1`}>
      </div>

      <div className={`project-desc-2`}>
        <p>blah</p>
        <PopoverItem 
          popover_image="/assets/images/tools-icons/nextjs.png"
          popover_desc=""
        />
      </div>
    </div>

    <div className={`project-card-container base2`} data-aos="fade-up">
      <div className={`project-desc-1`}>
      </div>

      <div className={`project-desc-2`}>
        <p>blah</p>
        <PopoverItem 
          popover_image="/assets/images/tools-icons/nextjs.png"
          popover_desc=""
        />
      </div>
    </div>

    <div className={`project-card-container autopit`} data-aos="fade-up">
      <div className={`project-desc-1`}>
      </div>

      <div className={`project-desc-2`}>
        <p>blah</p>
        <PopoverItem 
          popover_image="/assets/images/tools-icons/nextjs.png"
          popover_desc=""
        />
      </div>
    </div>

    <div className={`project-card-container tclam`} data-aos="fade-up">
      <div className={`project-desc-1`}>
      </div>

      <div className={`project-desc-2`}>
        <p>blah</p>
        <PopoverItem 
          popover_image="/assets/images/tools-icons/nextjs.png"
          popover_desc=""
        />
      </div>
    </div>

    <div className={`project-card-container elysium`} data-aos="fade-up">
      <div className={`project-desc-1`}>
      </div>

      <div className={`project-desc-2`}>
        <p>blah</p>
        <PopoverItem 
          popover_image="/assets/images/tools-icons/nextjs.png"
          popover_desc=""
        />
      </div>
    </div>

    <div className={`project-card-container udbio`} data-aos="fade-up">
      <div className={`project-desc-1`}>
      </div>

      <div className={`project-desc-2`}>
        <p>blah</p>
        <PopoverItem 
          popover_image="/assets/images/tools-icons/nextjs.png"
          popover_desc=""
        />
      </div>
    </div>

    <div className={`project-card-container bizcentric`} data-aos="fade-up">
      <div className={`project-desc-1`}>
      </div>

      <div className={`project-desc-2`}>
        <p>blah</p>
        <PopoverItem 
          popover_image="/assets/images/tools-icons/nextjs.png"
          popover_desc=""
        />
      </div>
    </div>

    <div className={`project-card-container fresotech`} data-aos="fade-up">
      <div className={`project-desc-1`}>
      </div>

      <div className={`project-desc-2`}>
        <p>blah</p>
        <PopoverItem 
          popover_image="/assets/images/tools-icons/nextjs.png"
          popover_desc=""
        />
      </div>
    </div>

    <div className={`project-card-container shawarma`} data-aos="fade-up">
      <div className={`project-desc-1`}>
      </div>

      <div className={`project-desc-2`}>
        <p>blah</p>
        <PopoverItem 
          popover_image="/assets/images/tools-icons/nextjs.png"
          popover_desc=""
        />
      </div>
    </div>

    <div className={`project-card-container qcrental`} data-aos="fade-up">
      <div className={`project-desc-1`}>
      </div>

      <div className={`project-desc-2`}>
        <p>blah</p>
        <PopoverItem 
          popover_image="/assets/images/tools-icons/nextjs.png"
          popover_desc=""
        />
      </div>
    </div>
  </>
);
