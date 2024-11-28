'use client';
import Tag from '@/components/Tag';
import { FiGithub, FiStar, FiTag } from 'react-icons/fi'; // Make sure to install react-icons

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Tag Component Demo</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Basic Colors</h2>
          <div className="flex flex-wrap gap-2">
            <Tag text="Blue Tag" color="blue" />
            <Tag text="Green Tag" color="green" />
            <Tag text="Red Tag" color="red" />
            <Tag text="Yellow Tag" color="yellow" />
            <Tag text="Purple Tag" color="purple" />
            <Tag text="Indigo Tag" color="indigo" />
            <Tag text="Pink Tag" color="pink" />
            <Tag text="Gray Tag" color="gray" />
            <Tag text="Orange Tag" color="orange" />
            <Tag text="Teal Tag" color="teal" />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Closable Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Tag 
              text="Closable Tag" 
              color="blue" 
              onClose={() => alert('Tag closed')} 
            />
            <Tag 
              text="Red Closable Tag" 
              color="red" 
              onClose={() => alert('Tag closed')} 
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Custom Colors</h2>
          <div className="flex flex-wrap gap-2">
            <Tag 
              text="Custom Color 1" 
              color="custom" 
              customColor="#f50" 
            />
            <Tag 
              text="Custom Color 2" 
              color="custom" 
              customColor="#87d068" 
            />
            <Tag 
              text="Custom Color 3" 
              color="custom" 
              customColor="#108ee9" 
              onClose={() => alert('Tag closed')} 
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Long Text Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Tag 
              text="This is a very long tag text to demonstrate how it handles long content" 
              color="blue" 
            />
            <Tag 
              text="Another very long tag text with a close button to test the layout" 
              color="green" 
              onClose={() => alert('Tag closed')} 
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Different Sizes</h2>
          <div className="flex flex-wrap gap-2 items-center">
            <Tag text="Small Tag" size="small" color="blue" />
            <Tag text="Medium Tag" size="medium" color="green" />
            <Tag text="Large Tag" size="large" color="purple" />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Tags with Icons</h2>
          <div className="flex flex-wrap gap-2">
            <Tag 
              text="GitHub" 
              color="gray" 
              icon={<FiGithub className="mr-1" />}
            />
            <Tag 
              text="Favorite" 
              color="yellow" 
              icon={<FiStar className="mr-1" />}
            />
            <Tag 
              text="Tagged" 
              color="blue" 
              icon={<FiTag className="mr-1" />}
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Clickable Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Tag 
              text="Click Me" 
              color="indigo" 
              clickable
              onClick={() => alert('Tag clicked!')}
            />
            <Tag 
              text="Interactive Tag" 
              color="pink" 
              clickable
              onClick={() => alert('Tag clicked!')}
              icon={<FiStar className="mr-1" />}
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Accessible Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Tag 
              text="Press Delete to Remove" 
              color="red" 
              onClose={() => alert('Tag closed')}
              ariaLabel="Removable tag example"
              role="button"
            />
            <Tag 
              text="Interactive Tag" 
              color="teal" 
              clickable
              onClick={() => alert('Tag clicked!')}
              ariaLabel="Click or press Enter to interact"
              role="button"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Tags with Tooltips</h2>
          <div className="flex flex-wrap gap-2">
            <Tag 
              text="Hover Me" 
              color="orange" 
              tooltip="This is a tooltip!"
            />
            <Tag 
              text="More Info" 
              color="green" 
              tooltip="Additional information here"
              icon={<FiStar className="mr-1" />}
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">不同圆角样式</h2>
          <div className="flex flex-wrap gap-2">
            <Tag 
              text="默认圆角" 
              color="blue" 
            />
            <Tag 
              text="无圆角" 
              color="green" 
              borderRadius={0}
            />
            <Tag 
              text="大圆角" 
              color="purple" 
              borderRadius={12}
            />
            <Tag 
              text="超大圆角" 
              color="pink" 
              borderRadius={20}
            />
            <Tag 
              text="圆形标签" 
              color="orange" 
              borderRadius="50%"
            />
            <Tag 
              text="自定义圆角" 
              color="custom"
              customColor="#1677ff"
              borderRadius="8px 20px"
            />
            <Tag 
              text="带图标圆形" 
              color="teal"
              icon={<FiStar className="mr-1" />}
              borderRadius="50px"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">组合样式展示</h2>
          <div className="flex flex-wrap gap-2">
            <Tag 
              text="可关闭圆角标签" 
              color="indigo" 
              borderRadius={16}
              onClose={() => alert('Tag closed')}
            />
            <Tag 
              text="自定义颜色圆角" 
              color="custom"
              customColor="#f50"
              borderRadius={25}
              icon={<FiTag className="mr-1" />}
            />
            <Tag 
              text="可点击大圆角" 
              color="blue"
              borderRadius={30}
              clickable
              onClick={() => alert('Clicked!')}
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">关闭效果演示</h2>
          <div className="flex flex-wrap gap-2">
            <Tag 
              text="渐变消失效果" 
              color="blue" 
              fadeOut={true}
              onClose={() => console.log('渐变消失')}
            />
            <Tag 
              text="直接消失效果" 
              color="red" 
              fadeOut={false}
              onClose={() => console.log('直接消失')}
            />
            <Tag 
              text="带图标渐变消失" 
              color="purple" 
              fadeOut={true}
              icon={<FiStar className="mr-1" />}
              onClose={() => console.log('带图标渐变消失')}
            />
            <Tag 
              text="自定义颜色渐变消失" 
              color="custom"
              customColor="#1677ff"
              fadeOut={true}
              onClose={() => console.log('自定义颜色渐变消失')}
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">渐变效果标签</h2>
          <div className="flex flex-wrap gap-2">
            <Tag 
              text="蓝色渐变" 
              color="gradient-blue"
              clickable
            />
            <Tag 
              text="紫色渐变" 
              color="gradient-purple"
              clickable
            />
            <Tag 
              text="绿色渐变" 
              color="gradient-green"
              clickable
            />
            <Tag 
              text="晚霞渐变" 
              color="gradient-sunset"
              clickable
            />
            <Tag 
              text="海洋渐变" 
              color="gradient-ocean"
              clickable
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">渐变标签组合效果</h2>
          <div className="flex flex-wrap gap-2">
            <Tag 
              text="可关闭渐变" 
              color="gradient-blue"
              onClose={() => alert('关闭')}
            />
            <Tag 
              text="带图标渐变" 
              color="gradient-purple"
              icon={<FiStar className="mr-1" />}
              clickable
            />
            <Tag 
              text="大尺寸渐变" 
              color="gradient-sunset"
              size="large"
              clickable
            />
            <Tag 
              text="提示渐变" 
              color="gradient-ocean"
              tooltip="渐变效果标签"
              clickable
            />
          </div>
        </section>
      </main>
    </div>
  );
}
