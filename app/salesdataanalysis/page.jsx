import Image from "next/image";
import React from "react";
import salesData from "@public/assets/projects/dataanalysispic.png";
import importLines from "@public/assets/projects/import.png";
import readCsv from "@public/assets/projects/readCsv.png";
import info from "@public/assets/projects/info.png";
import describe from "@public/assets/projects/describe.png";
import catSales from "@public/assets/projects/catSales.png";
import regionSales from "@public/assets/projects/regionSales.png";
import dateSales from "@public/assets/projects/dateSales.png";
import heatMap from "@public/assets/projects/heatMap.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={salesData}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">WALMART SALES DATA ANALYSIS PROJECT</h2>
          <h3> Python </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-[#379237]">Project</p>
          <h2>Overview</h2>
          <p>
          Let's analyze <a target='_blank' className="underline" href="https://www.kaggle.com/datasets/nairav/wakmart-sales-data">Walmart's sales data</a> between 2014 and 2017. We are going to use Python and pandas as well as 
          seaborn and matplotlib.pyplot. So, first, let's go ahead and import the necessary libraries for this analysis.
          </p>
          <Image 
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={importLines}
            alt="/" />
          <p className="mt-4">
            Now, we should read the excel file and create a pandas data frame, like so. I have the excel file saved
            on my desktop.
          </p>
          <Image 
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={readCsv}
            alt="/" />

          <p className="mt-4">
            Next, I want to make sense of the data that we are working with so lets run df.info() and see what we get.
            Here it looks like we have 16 different columns and each column has 9994 different rows, so that means 
            we are not missing any data which is good. Also, the sales, discount, and profit columns are floats while the 
            quantity column is an integer. This is useful information.
            
          </p>
          <Image 
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={info}
            alt="/" />

          <p className="mt-4">
            Now, I want to do some more EDA work. Let's use pandas describe() function so that we can look at information 
            like mean, standard deviation, min, and max values. We will also be able to look at the 25%, 50%, and 75% percentile
            values. <br /> <br />Here we learn that the average sales amount is approximately $229.86, with a wide range of values 
            indicated by the high standard deviation of $623.25. The minimum sales amount is $0.44, while the maximum sales 
            amount recorded is $22,638.48. <br /> <br /> Also, On average, customers purchase approximately 3.79 products per order. 
            The minimum quantity is 1, while the maximum quantity is 14. The standard deviation of 2.23 suggests some variation 
            in the number of products purchased. <br /> <br /> Additionally, on average, customers receive a discount of around 15.62% on their 
            purchases. The discounts range from 0% to a maximum of 80%. The standard deviation of 0.21 indicates some variability 
            in the discount amounts. <br /> <br /> Lastly, the average profit per order is $28.66, with a wide range of values indicated by 
            the high standard deviation of $234.26. The minimum profit is -$6,599.98, indicating losses on some orders. 
            The maximum profit recorded is $8,399.98. <br /> <br /> This is really interesting information and it is really cool to 
            see all of this!!
          </p>
          <Image 
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={describe}
            alt="/" />

          <p className="mt-4">
            Okay, now I want to look at sales by product category and sub-category. I am interested in learning 
            which category and sub-category combination are responsible for the most sales. First we have to group by 
            category and sub-category. Then, we want to sort the sales in descending order so that we can easily see the 
            answer to the above question. <br /> <br /> After looking at the results we see that the category Technology 
            and the sub-category Phones are responsible for the most sales with $330,007.05. This is what I would have expected
            since these items typically cost the most. This is very interesting and exciting to see!!
            
          </p>
          <Image 
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={catSales}
            alt="/" />

          <p className="mt-4">
            Another question I want to answer is: which region is responsible for the most sales? This should be a fairly
            easy question to answer and we can attack this in a similar way as the above question. So, let's go ahead and group 
            the data by region and then look at the sales for each region. We will then have to sort the data in descending order 
            to be able to easily see the answer. <br /> <br /> After doing so, we see that the west region has the most sales 
            while the south has the least amount of sales. Very interesting!!
            
          </p>
          <Image 
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={regionSales}
            alt="/" />  

          <p className="mt-4">
            Why stop there? Let's keep going!! Next, let's look at the sales data over time. The data focuses
            on sales between 2014 and 2017. I want to take a look at the monthly breakdown of sales over that time 
            period and see which month is responsible for the most sales. So, to begin, let's set the index of the 
            data frame to be the order date. Then, let's use the resample function in order to group the sales by month.
            This is a really cool function that I didn't know exisited but will definitely be using it very odten.
            <br /> <br /> After we plot the data, we can see that the month with the most sales is November of 2017.
            Pretty cool right?
            
          </p>
          <Image 
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={dateSales}
            alt="/" />  

          <p className="mt-4">
            Lastly, let's do some correlation. Specifically, let's explore the correlation 
            between variables such as sales and profit, discount and quantity. So, lets select only those columns and then 
            we can create a heat map of the correlation matrix after we use the corr() function. We will use seaborn to create the 
            heat map. 
            <br /> <br /> Here is what we learn: <br /> <br /> Sales vs. Profit:

            The correlation coefficient between sales and profit is approximately 0.479.
            This positive correlation suggests a moderate positive relationship between sales and profit.
            It indicates that as sales increase, profit tends to increase as well, but the relationship is not extremely strong.
            <br /> <br />
            Sales vs. Discount:

            The correlation coefficient between sales and discount is approximately -0.028.
            This value is close to zero, indicating a weak correlation or no significant linear relationship between sales and discount.
            It suggests that there is no strong relationship between the amount of discount applied and the sales amount.
            <br /> <br />
            Profit vs. Discount:

            The correlation coefficient between profit and discount is approximately -0.219.
            This negative correlation suggests a weak negative relationship between profit and discount.
            It implies that as the discount increases, profit tends to decrease slightly, but the relationship is not strongly pronounced.
            <br /> <br />
            Sales vs. Quantity:

            The correlation coefficient between sales and quantity is approximately 0.201.
            This positive correlation indicates a weak positive relationship between sales and the quantity of products purchased.
            It suggests that as the quantity of products purchased increases, sales tend to increase, but the relationship is not very strong.
            
          </p>
          <Image 
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={heatMap}
            alt="/" />  

          <p className="mt-8">
            Overall, this was a very fun project to work on and I am glad I was able to share it with you. As a result,
            I greatly improved my data analysis skills using pyton and I believe this project translates very well into 
            a real-world business scenario because I have actully worked on similar projects during my internship 
            last summer with McNaughton-McKay.
            
          </p>


          <a
            href="https://www.kaggle.com/datasets/nairav/wakmart-sales-data"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center pt-4"
          >
            <button className="px-8 py-2 mt-4 mr-8">Data</button>
          </a>
          
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 h-80">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Pandas
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Seaborn
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> matplotlib.pyplot
              </p>
              
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
