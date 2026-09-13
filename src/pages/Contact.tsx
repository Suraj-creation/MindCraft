import React, { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Section, Container } from '../components/layout/Section';

const REGIONS = ['Africa', 'Europe', 'United States'];

const INTERESTS = [
  'Market Research',
  'Business Consulting',
  'AI Enterprise Solutions',
  'AI Training',
  'Life Sciences',
  'Not sure yet',
];

/* TODO: required-future config. The client has not supplied a submission
   endpoint. Until VITE_CONTACT_ENDPOINT is set the form hands off to the user's
   mail client rather than pretending to deliver a message it never sent. */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
const INBOX = 'info@mindcraftconsultancy.com';

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

const fieldCls =
  'mt-2 w-full min-h-[44px] rounded-edge border bg-[var(--color-ground)] px-4 py-3 text-body text-[var(--color-ink-strong)] transition-colors focus:outline-none';

export const Contact: React.FC = () => {
  const { queryParams } = useNavigation();

  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    region: REGIONS[0],
    interest: INTERESTS[0],
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const scope = useMemo(
    () => [queryParams.industry, queryParams.geography, queryParams.capability].filter(Boolean),
    [queryParams]
  );

  useEffect(() => {
    if (queryParams.capability && INTERESTS.includes(queryParams.capability)) {
      setForm((p) => ({ ...p, interest: queryParams.capability }));
    }
  }, [queryParams]);

  const set = (k: keyof typeof form, v: string) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (k in errors) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    // Deliberately permissive: one @ with something either side. Stricter
    // patterns reject valid addresses and block real enquiries.
    if (!form.email.trim()) e.email = 'Please enter an email address so we can reply.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = 'That email address does not look complete.';
    if (!form.message.trim()) e.message = 'Please tell us what you are working on.';
    return e;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      document.getElementById(Object.keys(e)[0])?.focus();
      return;
    }

    const scopeLine = scope.length ? `\n\nScoped to: ${scope.join(' / ')}` : '';
    const body = `${form.message}${scopeLine}\n\n—\n${form.name}${
      form.organization ? `, ${form.organization}` : ''
    }\n${form.email}\nRegion: ${form.region}\nArea of interest: ${form.interest}`;

    if (ENDPOINT) {
      try {
        await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form, scope }),
        });
        setSent(true);
        return;
      } catch {
        // Fall through to mail client rather than reporting a false success.
      }
    }
    window.location.href = `mailto:${INBOX}?subject=${encodeURIComponent(
      `Enquiry — ${form.interest}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const errCls = (k: keyof Errors) =>
    errors[k] ? 'border-[var(--color-error)]' : 'border-[var(--color-line-2)] focus:border-[var(--color-accent)]';

  return (
    <div>
      <section className="pt-[var(--band-tight)] pb-[var(--band-tight)]">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-x-16 gap-y-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="text-h1">Start a conversation.</h1>
            </div>
            <div className="lg:col-span-5 lg:pt-4">
              <p className="text-body text-[var(--color-ink-2)]">
                Tell us the decision you are facing. If we are not the right partner for it, we will
                say so and point you somewhere better.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="ground-2" band="normal" width="wide" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {scope.length > 0 && (
              <p className="mb-8 border-l-2 border-[var(--color-accent)] pl-5 text-body-sm text-[var(--color-ink-2)]">
                Scoped to <span className="text-[var(--color-grass)]">{scope.join(' / ')}</span> from
                the explorer.
              </p>
            )}

            {sent ? (
              <div aria-live="polite">
                <h2 className="text-h3">Thank you.</h2>
                <p className="measure mt-5 text-body text-[var(--color-ink-2)]">
                  {ENDPOINT
                    ? 'Your message is with the Nairobi office. A member of the team will reply to you directly.'
                    : 'Your mail client should have opened with the message ready to send. If it did not, write to us directly at the address below.'}
                </p>
                <a
                  href={`mailto:${INBOX}`}
                  className="mt-6 inline-block text-body text-[var(--color-accent)] underline decoration-[var(--color-line-strong)] underline-offset-4 hover:decoration-[var(--color-accent)]"
                >
                  {INBOX}
                </a>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-body-sm text-[var(--color-ink-2)]">
                      Name <span className="text-[var(--color-ink-3)]">(required)</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={(e) => set('name', e.target.value)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`${fieldCls} ${errCls('name')}`}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-2 text-caption text-[var(--color-error)]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="organization" className="text-body-sm text-[var(--color-ink-2)]">
                      Organisation
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      value={form.organization}
                      onChange={(e) => set('organization', e.target.value)}
                      className={`${fieldCls} border-[var(--color-line-2)] focus:border-[var(--color-accent)]`}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="text-body-sm text-[var(--color-ink-2)]">
                      Email <span className="text-[var(--color-ink-3)]">(required)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`${fieldCls} ${errCls('email')}`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-caption text-[var(--color-error)]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="region" className="text-body-sm text-[var(--color-ink-2)]">
                      Region
                    </label>
                    <select
                      id="region"
                      name="region"
                      value={form.region}
                      onChange={(e) => set('region', e.target.value)}
                      className={`${fieldCls} cursor-pointer border-[var(--color-line-2)] focus:border-[var(--color-accent)]`}
                    >
                      {REGIONS.map((r) => (
                        <option key={r} value={r} className="bg-[var(--color-surface)]">
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="interest" className="text-body-sm text-[var(--color-ink-2)]">
                      Area of interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={form.interest}
                      onChange={(e) => set('interest', e.target.value)}
                      className={`${fieldCls} cursor-pointer border-[var(--color-line-2)] focus:border-[var(--color-accent)]`}
                    >
                      {INTERESTS.map((i) => (
                        <option key={i} value={i} className="bg-[var(--color-surface)]">
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-body-sm text-[var(--color-ink-2)]">
                      What are you working on?{' '}
                      <span className="text-[var(--color-ink-3)]">(required)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={(e) => set('message', e.target.value)}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`${fieldCls} resize-y ${errCls('message')}`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-2 text-caption text-[var(--color-error)]">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-9 inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]"
                >
                  Send
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}
          </div>

          <dl className="lg:col-span-4 lg:col-start-9">
            {[
              ['Headquarters', 'Nairobi, Kenya'],
              ['Email', INBOX],
              ['Regions served', 'Africa · Europe · United States'],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-[var(--color-line)] py-5">
                <dt className="font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--color-ink-3)]">
                  {k}
                </dt>
                <dd className="mt-2 text-body text-[var(--color-ink)]">
                  {k === 'Email' ? (
                    <a
                      href={`mailto:${INBOX}`}
                      className="text-[var(--color-accent)] underline decoration-[var(--color-line-strong)] underline-offset-4 hover:decoration-[var(--color-accent)]"
                    >
                      {v}
                    </a>
                  ) : (
                    v
                  )}
                </dd>
              </div>
            ))}
            <p className="border-t border-[var(--color-line)] pt-5 text-caption text-[var(--color-ink-3)]">
              Nairobi is our only office. Everywhere else we work through in-country research
              associates.
            </p>
          </dl>
        </div>
      </Section>
    </div>
  );
};
