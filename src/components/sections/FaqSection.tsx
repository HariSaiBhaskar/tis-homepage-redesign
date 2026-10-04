import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, HelpCircle, Send } from 'lucide-react';
import { useState } from 'react';
import { FAQS } from '../../data/content';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../animation/Reveal';
import { cn } from '../../lib/utils';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title={
              <>
                Questions,{' '}
                <span className="brand-gradient-text">answered</span>
              </>
            }
            description="Everything parents usually ask before visiting. Still unsure? Our admissions team is one call away."
          />
          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-line bg-panel p-7">
              <HelpCircle className="h-8 w-8 text-brand" aria-hidden="true" />
              <h3 className="font-display mt-4 text-xl font-semibold text-ink">
                Talk to our admissions team
              </h3>
              <p className="mt-2 text-sm leading-relaxed">
                Mon – Sat, 8:00 AM – 4:00 PM. Average response time under 24
                hours.
              </p>
              <Button
                size="md"
                icon={Send}
                className="mt-5"
                onClick={() =>
                  document
                    .getElementById('admissions')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Ask a Question
              </Button>
            </div>
          </Reveal>
        </div>

        <ul className="space-y-4">
          {FAQS.map((faq, index) => {
            const open = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 0.07}>
                <li
                  className={cn(
                    'overflow-hidden rounded-2xl border transition-colors duration-300',
                    open
                      ? 'border-brand/50 bg-panel shadow-lg shadow-brand/10'
                      : 'border-line bg-panel hover:border-brand/30',
                  )}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() =>
                      setOpenIndex(open ? null : index)
                    }
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-ink">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300',
                        open
                          ? 'rotate-180 border-brand bg-brand text-onbrand'
                          : 'border-line text-body',
                      )}
                    >
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
