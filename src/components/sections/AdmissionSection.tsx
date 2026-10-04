import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { ADMISSION_STEPS } from '../../data/content';
import { Button } from '../ui/Button';
import { Reveal } from '../animation/Reveal';

const inputClasses =
  'w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-body/60 transition-colors outline-none focus:border-brand focus:ring-2 focus:ring-brand/25';

export function AdmissionSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="admissions"
      aria-label="Admissions"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <Reveal>
        <div className="brand-gradient-bg relative overflow-hidden rounded-[2.5rem] p-8 shadow-2xl shadow-brand/30 sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -24, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-bold tracking-[0.2em] text-white/80 uppercase">
                Admissions 2026–27
              </p>
              <h2 className="font-display mt-3 text-3xl leading-tight font-bold text-white md:text-[2.6rem]">
                Begin your child’s
                <br />
                TIS journey
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-white/85">
                Four simple steps stand between you and a campus your child
                will love. Seats are limited to 30 students per section.
              </p>

              <ol className="mt-10 space-y-0">
                {ADMISSION_STEPS.map((step, index) => (
                  <motion.li
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + index * 0.1, duration: 0.5 }}
                    className="relative flex gap-5 pb-8 last:pb-0"
                  >
                    {index < ADMISSION_STEPS.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute top-11 left-[1.375rem] h-[calc(100%-2.5rem)] w-0.5 bg-white/25"
                      />
                    )}
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 font-display text-lg font-bold text-white backdrop-blur-sm">
                      {index + 1}
                    </span>
                    <div className="pt-1">
                      <h3 className="font-display text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-white/75">
                        {step.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl bg-canvas p-7 shadow-xl sm:p-8">
              <AnimatePresence mode="wait" initial={false}>
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 16 }}
                      className="brand-gradient-bg flex h-16 w-16 items-center justify-center rounded-full"
                    >
                      <CheckCircle2 className="h-8 w-8 text-onbrand" aria-hidden="true" />
                    </motion.span>
                    <h3 className="font-display mt-6 text-2xl font-semibold text-ink">
                      Enquiry received
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed">
                      Thank you for your interest. Our admissions team will
                      reach out within 24 hours to schedule your campus visit.
                    </p>
                    <Button
                      variant="ghost"
                      size="md"
                      className="mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      Send another enquiry
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    aria-label="Admission enquiry form"
                  >
                    <h3 className="font-display text-xl font-semibold text-ink">
                      Request a call back
                    </h3>
                    <p className="mt-1.5 text-sm text-body">
                      Fields marked * are required.
                    </p>

                    <div className="mt-6 space-y-4">
                      <div>
                        <label
                          htmlFor="parent-name"
                          className="mb-1.5 block text-xs font-bold tracking-wide text-ink uppercase"
                        >
                          Parent name *
                        </label>
                        <input
                          id="parent-name"
                          name="parent-name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="e.g. Priya Sharma"
                          className={inputClasses}
                        />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-1.5 block text-xs font-bold tracking-wide text-ink uppercase"
                          >
                            Email *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="you@example.com"
                            className={inputClasses}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="mb-1.5 block text-xs font-bold tracking-wide text-ink uppercase"
                          >
                            Phone *
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            autoComplete="tel"
                            placeholder="+91"
                            className={inputClasses}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="grade"
                          className="mb-1.5 block text-xs font-bold tracking-wide text-ink uppercase"
                        >
                          Grade applying for *
                        </label>
                        <select
                          id="grade"
                          name="grade"
                          required
                          defaultValue=""
                          className={inputClasses}
                        >
                          <option value="" disabled>
                            Select a grade
                          </option>
                          {['Class IV – V', 'Class VI – VIII', 'Class IX – X', 'Class XI – XII'].map(
                            (option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ),
                          )}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-1.5 block text-xs font-bold tracking-wide text-ink uppercase"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Tell us about your child or ask us anything…"
                          className={`${inputClasses} resize-none`}
                        />
                      </div>
                      <Button type="submit" size="lg" icon={Send} className="w-full sm:w-auto">
                        Submit Enquiry
                      </Button>
                      <p className="flex items-center gap-1.5 text-xs text-body">
                        <ChevronRight className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                        No fees at this stage — we respond first.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
