import React, { useState } from 'react';

interface TabContent {
	id: string;
	label: string;
	title: string;
	image: string;
	content: React.ReactNode;
}

const TabButton: React.FC<{
	tab: TabContent;
	isActive: boolean;
	onClick: () => void;
}> = ({ tab, isActive, onClick }) => (
	<button
		role="tab"
		aria-selected={isActive ? 'true' : 'false'}
		aria-controls={`panel-${tab.id}`}
		id={`tab-${tab.id}`}
		className={`tab pill ${isActive ? 'active' : ''}`}
		onClick={onClick}
	>
		{tab.label}
	</button>
);

const TabPanel: React.FC<{
	tab: TabContent;
	isActive: boolean;
}> = ({ tab, isActive }) => (
	<div
		tabIndex={0}
		role="tabpanel"
		id={`panel-${tab.id}`}
		aria-labelledby={`tab-${tab.id}`}
		className={`tabpanel ${isActive ? 'is-active' : ''}`}
		data-img={tab.image}
	>
		<h2>{tab.title}</h2>
		{tab.content}
	</div>
);

const AboutContent: React.FC = () => (
	<>
		<p><strong>Why now?</strong> Millions in Cameroon still lack reliable, affordable connectivity. This gap limits education, healthcare, and entrepreneurship. Our PoC in Douala proves a model that can scale.</p>
		<p>A survey conducted with students in the PK17 residential zone revealed widespread dissatisfaction with existing data plans. Key needs raised were:</p>
		<ul>
			<li>Speed</li>
			<li>Affordability</li>
			<li>Quantity</li>
		</ul>
	</>
);

const HowContent: React.FC = () => (
	<>
		<p><strong>Lean, modular radio networks + local partnerships + data-driven planning.</strong> We optimize coverage per franc, onboard communities, and keep pricing transparent.</p>
		<p><strong>Delivering seamless connectivity right to your hands.</strong></p>
	</>
);

const WhatContent: React.FC = () => (
	<>
		<p><strong>A scalable connectivity platform</strong></p>
		<p>Core infrastructure, last-mile access, and a simple mobile app for top-ups and support—designed to grow from neighborhood deployments to nationwide coverage.</p>
		<p><strong>Our Founder</strong></p>
		<p><strong>Karol Konarski</strong>, a visionary leader, reimagined the old model of cyber cafés into <strong>Cyber Wi-Fis</strong>: affordable, unlimited data bundles you can subscribe to straight from your phone and enjoy from the comfort of your home.</p>
	</>
);

export const LearnMore: React.FC = () => {
	const [activeTab, setActiveTab] = useState('why');

	const tabs: TabContent[] = [
		{
			id: 'why',
			label: 'WHY',
			title: 'About Us',
			image: 'assets/img/about-why.jpg',
			content: <AboutContent />,
		},
		{
			id: 'how',
			label: 'HOW',
			title: 'How we solve it',
			image: 'assets/img/about-how.jpg',
			content: <HowContent />,
		},
		{
			id: 'what',
			label: 'WHAT',
			title: "What we're building",
			image: 'assets/img/about-what.jpg',
			content: <WhatContent />,
		},
	];

	return (
		<section id="about" className="reveal">
			<div className="container">
				<article className="about-card surface">
					{/* LEFT: Tabs + copy */}
					<div className="about-left" data-tabs>
						<div className="tablist" role="tablist" aria-label="Why How What">
							{tabs.map((tab) => (
								<TabButton
									key={tab.id}
									tab={tab}
									isActive={activeTab === tab.id}
									onClick={() => setActiveTab(tab.id)}
								/>
							))}
						</div>

						{tabs.map((tab) => (
							<TabPanel
								key={tab.id}
								tab={tab}
								isActive={activeTab === tab.id}
							/>
						))}
					</div>

					{/* RIGHT: Illustration that follows the active tab */}
					<figure className="about-figure">
						<img
							id="about-illustration"
							src={`assets/img/about-${activeTab}.jpg`}
							alt="About illustration"
						/>
					</figure>
				</article>
			</div>
		</section>
	);
};
