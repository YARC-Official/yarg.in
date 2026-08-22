<script>
	import { Accordion } from 'bits-ui';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';

	const items = [
		{
			title: "Is YARG really free?",
			content: "Yes! There will never be any kind of payment or in-app transaction in YARG. YARG is also open-source meaning that anyone can help make YARG better!"
		},
		{
			title: "Isn't 'YARG' a pirates catchphrase?",
			content: "YARG stands firmly against all forms of piracy. We neither support nor endorse piracy, as it is a violation of copyright law with serious legal consequences. Our platform's importable content—designed for creators to share their work and for educational purposes—does not justify or excuse piracy.\n\nYARG itself does not use any ripped/pirated assets or music and never will. By using YARG, users agree not to promote or endorse piracy in any way through our platform. Upholding these principles ensures a community that respects copyright, creativity, and legal standards.\n\nYARG stands for 'Yet Another Rhythm Game' and NOT for pirates."
		},
		{
			title: "How do I become a developer, artist, or charter?",
			content: "If you'd like to help out with YARG's development (thank you, by the way!), you can do so on our Discord server where we have specific channels for programming, art, and charting!"
		},
		{
			title: "I make music, and would like my/our song in YARG. How can we go about requesting it?",
			content: "You can find all information about content collaborations, including requesting for songs to be added to YARG on the Content page!"
		},
		{
			title: "I am a content creator or manager for an IP, and would like to contribute to YARG. How can I do so?",
			content: "We would greatly appreciate if you use, play, or showcase YARG as part of your own activities! You do not need to ask for our permission to play YARG. However, please note that using YARG in your content does not imply that your content is endorsed by YARG and its team.\n\nIf you do want to collaborate with us in an official capacity, whether that be a custom build of the game, or some other game integrations, you can find information about that on the Content page! We're open to all inquiries and suggestions!"
		},
		{
			title: "Where can I see the features that are currently being developed or planned for YARG?",
			content: "You can view upcoming features and developments on our YouTrack roadmap!"
		},
		{
			title: "How can I support YARG?",
			content: "Since YARG is not-for-profit game, there is no direct monetary way to support us. However, please feel free to either contribute or just spread the word!\n\nWe do have an official merch store where you can buy YARG themed t-shirts and stickers, and the revenue from that is put right back into YARG's development, including operating costs, licensing fees, and server upkeep."
		},
	];
</script>

<Accordion.Root class="w-full md:max-w-[60%] md:mx-auto" type="multiple">
	{#each items as item, idx}
		<Accordion.Item value={idx} class="group border-space-cadet-light border-b">
			<Accordion.Header>
				<Accordion.Trigger
				class="flex w-full flex-1 select-none items-center justify-between py-5 text-[15px] transition-all [&[data-state=open]>span>i]:rotate-180"
				>
					<span class="w-full text-left text-xl red-hat-bold">{item.title}</span>
					<span class="hover:bg-dark-10 inline-flex size-8 items-center justify-center rounded-[7px] bg-transparent">
						<ChevronDown class="transition-transform duration-200" />
					</span>
				</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content
				class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm tracking-[-0.01em]"
			>
				<div class="pb-8 text-cool-gray text-lg red-hat whitespace-pre-wrap">{item.content}</div>
			</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>