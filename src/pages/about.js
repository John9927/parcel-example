export const AboutPage = (render) => {
  const template = `
        <div>
        <img class="images" src="https://dummyimage.com/1024x300/828bcc/0a2aa8&text=About+me" style="width:100%;">
        </div>
        <h1 style="display: flex; justify-content: center; margin-top: 15px; margin-bottom: 15px; font-size: 40px">Welcome</h1>

        <div style="display: flex; flex-direction: row; width: 100%;">
        <p style="display: flex; justify-content: flex-start; margin-left: 22px; margin-top: 47px; margin-right: 22px"> Website.com began in 2005. After years in the web hosting industry, we realized that it was near impossible for the average Jane or Joe to create their own website. Traditional web hosting services were simply too complicated, time consuming, and expensive to manage. We created the Website.com Site Builder with the user's perspective in mind. We wanted to offer a platform that would require no coding skills or design experience. We keep it simple, so users can focus on creating an amazing website that reflects their brand. Best of all - it's free. You can get online, showcase your brand, or start selling products right away. After seeing an increased need for ecommerce solutions, we developed one of the only fully-featured, free and commission-free online store builders, allowing business owners to launch their online business. Today, we're proud to empower individuals and small business owners around the world. Everyone deserves a website, and we're excited to see what you create.
        </p>
        <img class="images" src="https://dummyimage.com/500x300/629fd9/fff">
        </div>
        
        <div style="display: flex; flex-direction: row;">
        <img class="images" src="https://dummyimage.com/500x300/697b8c/fff">
        <p style="display: flex; justify-content: flex-end; margin-right: 22px; margin-left: 22px; margin-top: 47px;">
        Website.com began in 2005. After years in the web hosting industry, we realized that it was near impossible for the average Jane or Joe to create their own website. Traditional web hosting services were simply too complicated, time consuming, and expensive to manage. We created the Website.com Site Builder with the user's perspective in mind. We wanted to offer a platform that would require no coding skills or design experience. We keep it simple, so users can focus on creating an amazing website that reflects their brand. Best of all - it's free. You can get online, showcase your brand, or start selling products right away. After seeing an increased need for ecommerce solutions, we developed one of the only fully-featured, free and commission-free online store builders, allowing business owners to launch their online business. Today, we're proud to empower individuals and small business owners around the world. Everyone deserves a website, and we're excited to see what you create.
        </p>
        </div>
        <img class="images" src="https://dummyimage.com/1024x300/233647/000000" style="width: 100%;  margin-top: 2px">
    `;
  render(template);
};
