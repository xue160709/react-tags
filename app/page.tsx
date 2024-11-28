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
          <h2 className="text-xl font-semibold mb-4">Different Border Radius Styles</h2>
          <div className="flex flex-wrap gap-2">
            <Tag 
              text="Default Radius" 
              color="blue" 
            />
            <Tag 
              text="No Radius" 
              color="green" 
              borderRadius={0}
            />
            <Tag 
              text="Large Radius" 
              color="purple" 
              borderRadius={12}
            />
            <Tag 
              text="Large Radius" 
              color="pink" 
              borderRadius={20}
            />
            <Tag 
              text="Circular Tag" 
              color="orange" 
              borderRadius="50%"
            />
            <Tag 
              text="Custom Radius" 
              color="custom"
              customColor="#1677ff"
              borderRadius="8px 20px"
            />
            <Tag 
              text="Circular Tag with Icon" 
              color="teal"
              icon={<FiStar className="mr-1" />}
              borderRadius="50px"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Combination Styles</h2>
          <div className="flex flex-wrap gap-2">
            <Tag 
              text="Closable Tag with Large Radius" 
              color="indigo" 
              borderRadius={16}
              onClose={() => alert('Tag closed')}
            />
            <Tag 
              text="Custom Color Radius" 
              color="custom"
              customColor="#f50"
              borderRadius={25}
              icon={<FiTag className="mr-1" />}
            />
            <Tag 
              text="Clickable Large Radius" 
              color="blue"
              borderRadius={30}
              clickable
              onClick={() => alert('Clicked!')}
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Fade Out Effect</h2>
          <div className="flex flex-wrap gap-2">
            <Tag 
              text="Fade Out Effect" 
              color="blue" 
              fadeOut={true}
              onClose={() => console.log('Fade Out')}
            />
            <Tag 
              text="Direct Fade Out" 
              color="red" 
              fadeOut={false}
              onClose={() => console.log('Direct Fade Out')}
            />
            <Tag 
              text="Fade Out with Icon" 
              color="purple" 
              fadeOut={true}
              icon={<FiStar className="mr-1" />}
              onClose={() => console.log('Fade Out with Icon')}
            />
            <Tag 
              text="Custom Color Fade Out" 
              color="custom"
              customColor="#1677ff"
              fadeOut={true}
              onClose={() => console.log('Custom Color Fade Out')}
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Custom Gradient Effect</h2>
          <div className="flex flex-wrap gap-2">
            <Tag 
              text="Custom Blue Gradient" 
              gradient={{
                from: '#1677ff',
                to: '#69b1ff',
                direction: '45deg'
              }}
              clickable
            />
            <Tag 
              text="Purple Gradient" 
              gradient={{
                from: '#722ED1',
                to: '#B37FEB',
                direction: 'to right'
              }}
              clickable
            />
            <Tag 
              text="Sunset Gradient" 
              gradient={{
                from: '#FF4D4F',
                to: '#FFA940',
                direction: '135deg'
              }}
              clickable
            />
            <Tag 
              text="Aurora Gradient" 
              gradient={{
                from: '#13C2C2',
                to: '#36CFC9',
                direction: 'to bottom right'
              }}
              clickable
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Gradient Combination</h2>
          <div className="flex flex-wrap gap-2">
            <Tag 
              text="Closable Gradient" 
              gradient={{
                from: '#1677ff',
                to: '#69b1ff'
              }}
              onClose={() => alert('Close')}
            />
            <Tag 
              text="Gradient with Icon" 
              gradient={{
                from: '#722ED1',
                to: '#B37FEB'
              }}
              icon={<FiStar className="mr-1" />}
              clickable
            />
            <Tag 
              text="Large Gradient" 
              gradient={{
                from: '#FF4D4F',
                to: '#FFA940'
              }}
              size="large"
              clickable
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Font Size and Weight</h2>
          <div className="flex flex-wrap gap-2 items-center">
            <Tag 
              text="Small Font Tag" 
              color="blue" 
              fontSize="12px"
            />
            <Tag 
              text="Default Font Tag" 
              color="green" 
            />
            <Tag 
              text="Medium Font Tag" 
              color="purple" 
              fontSize="16px"
            />
            <Tag 
              text="Large Font Tag" 
              color="pink" 
              fontSize="18px"
            />
            <Tag 
              text="Large Font Tag" 
              color="orange" 
              fontSize="24px"
              fontWeight={600}
            />
            <Tag 
              text="Large Font Tag with Icon" 
              color="teal"
              fontSize="20px"
              fontWeight={700}
              icon={<FiStar />}
            />
            <Tag 
              text="Large Closable Tag" 
              color="orange" 
              fontSize="24px"
              fontWeight={600}
              onClose={() => alert('Closed!')}
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Combination Font Effect</h2>
          <div className="flex flex-wrap gap-2 items-center">
            <Tag 
              text="Gradient Large Font Tag" 
              gradient={{
                from: '#1677ff',
                to: '#69b1ff'
              }}
              fontSize="20px"
              fontWeight={600}
            />
            <Tag 
              text="Closable Large Font Tag" 
              color="purple"
              fontSize="18px"
              fontWeight={500}
              onClose={() => alert('Close')}
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Font Style Display</h2>
          <div className="flex flex-wrap gap-2 items-center">
            <Tag 
              text="Normal Tag" 
              color="blue" 
            />
            <Tag 
              text="Italic Tag" 
              color="green" 
              italic
            />
            <Tag 
              text="Large Italic Tag" 
              color="purple" 
              fontSize="18px"
              italic
            />
            <Tag 
              text="Bold Italic Tag" 
              color="pink" 
              fontWeight={600}
              italic
            />
            <Tag 
              text="Large Italic Tag" 
              color="orange" 
              fontSize="24px"
              fontWeight={600}
              italic
            />
            <Tag 
              text="Gradient Italic Tag" 
              gradient={{
                from: '#1677ff',
                to: '#69b1ff'
              }}
              fontSize="20px"
              italic
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Combination Style</h2>
          <div className="flex flex-wrap gap-2 items-center">
            <Tag 
              text="Italic with Icon" 
              color="teal"
              icon={<FiStar />}
              italic
            />
            <Tag 
              text="Closable Italic Tag" 
              color="purple"
              italic
              onClose={() => alert('Close')}
            />
            <Tag 
              text="Custom Italic Tag" 
              color="custom"
              customColor="#1677ff"
              fontSize="16px"
              fontWeight={500}
              italic
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Border Styles</h2>
          <div className="flex flex-wrap gap-2 items-center">
            <Tag 
              text="Default Border" 
              color="blue" 
            />
            <Tag 
              text="No Border" 
              color="green" 
              noBorder
            />
            <Tag 
              text="Thick Border" 
              color="purple" 
              borderWidth={2}
            />
            <Tag 
              text="Extra Thick Border" 
              color="pink" 
              borderWidth={3}
            />
            <Tag 
              text="Custom Color Thick Border" 
              color="custom"
              customColor="#1677ff"
              borderWidth={2}
            />
            <Tag 
              text="No Border Gradient" 
              gradient={{
                from: '#1677ff',
                to: '#69b1ff'
              }}
              noBorder
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Combined Border Styles</h2>
          <div className="flex flex-wrap gap-2 items-center">
            <Tag 
              text="Thick Border with Icon" 
              color="teal"
              borderWidth={2}
              icon={<FiStar className="mr-1" />}
            />
            <Tag 
              text="No Border Closable" 
              color="orange"
              noBorder
              onClose={() => alert('Close')}
            />
            <Tag 
              text="Custom Border Style" 
              color="blue"
              borderWidth={4}
              borderRadius="10px"
              fontSize="16px"
              fontWeight={500}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
