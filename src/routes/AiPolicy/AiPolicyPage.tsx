import PolicyDocument, { PolicySection } from '../../components/PolicyDocument/PolicyDocument';
import Brackets from '../../components/UI/Brackets/Brackets';
import PostCard from '../../components/UI/PostCard/PostCard';
import { CONTACT_EMAIL } from '../../SITE';

const SECTIONS: PolicySection[] = [
  { id: 'note', label: 'A Note from Dirk' },
  { id: 'pragmatic', label: 'Morality and Pragmatism' },
  { id: 'consent', label: 'Consent', sub: true },
  { id: 'ownership', label: 'Copyright', sub: true },
  { id: 'process', label: 'Owning the Process', sub: true },
  { id: 'bottom-line', label: 'The Bottom Line' },
  { id: 'policy', label: 'Our Policy' },
  { id: 'in-house', label: 'In-House Projects', sub: true },
  { id: 'client', label: 'Client Projects', sub: true },
  { id: 'questions', label: 'Questions' },
];


export default function AiPolicyPage() {
  return (
    <PolicyDocument title="AI Usage Policy" updated="2026-10-05" sections={SECTIONS}>
      {/* TODO: preamble - keep it to two or three sentences. */}
      <p>
        AI tools are used in nearly every corner of tech these days. If you&apos;re trusting us with your
        project, you have a right to know if we use them, exactly how we use them, and where we never will.
      </p>
      <p>
        The short version: <strong>AI is a tool we use to engineer. Creative work is made by people.</strong>
      </p>
      {/* For the skimmers: straight to the punchline. */}
      <p>
        <a className="btn btn--tertiary" href="#policy">
          <Brackets>Skip to our policy ↓</Brackets>
        </a>
      </p>

      {/* Dirk's own voice, set apart from the company stance as an embedded post. */}
      <PostCard
        id="note"
        name="Dirk Hortensius"
        role="Founder & Sr. Engineer @ ToasterCat Studios"
        tag="Personal note"
      >
        {/* TODO: your statement, in your own words. */}
        <p>I hate the term "AI".</p>
        
        <p>
          CPU SRC: I use AI every day as an engineering tool. It helped refactor the site you&apos;re
          reading right now. But art, animation, music, and the worlds we build come from
          people, and I won&apos;t build on generative tools trained on other creators&apos;
          work without their consent.
        </p>

        <p>
          I hate the term "AI". What we're seeing today isn't new, and it's certainly not intelligent.
          It's an extension of large-scale data correlation techniques we've been employing for decades, just made accessible by throwing more GPUs, datacenters, and money at the problem.
        </p>
        <p>
          The modern Large Learning Model [LLM] came about in 2017 when 
        </p>

        <p>
          When you hire us, you should own what we make for you, outright.
        </p>

        {/* TODO: keep or cut this example. */}
        <p>
          AI-produced output isn't "slop" just because a bot was used. It's slop because its creator didn't
          even bother to care about what they're making to begin with.
        </p>

      </PostCard>

      {/* The reasoning, before the rules it leads to. */}
      <h2 id="pragmatic">Morality and Pragmatism</h2>
      <p>
        This isn&apos;t only an ethical stance. A large language model works by predicting the
        most likely output from what it has already seen, so by design it hands you an average,
        derivative result. It gets there through a process that&apos;s non-deterministic and
        can&apos;t be repeated exactly. If you ask an LLM bot the same question twice, you'll
        get two different answers.
      </p>
      <p>
        Fast pattern-matching across everything it has seen is an excellent tool when
        you&apos;re chasing down a bug. An average, unrepeatable result is exactly what you
        don&apos;t want in work that&apos;s meant to stand out, or to be yours.
      </p>


      {/* ================== CONSENT ================ */}
      <h2 id="consent">Why: Consent and Derivative Work</h2>
      <p>
        First and foremost: <strong>We do not use generative AI to create work derived from other people&apos;s art,
        music, or writing without their consent.</strong>.
      </p>
      <p>
        Many of the best-known image, music, and voice generators were trained on creators&apos;
        work collected without their permission, and several now face lawsuits over it. The US
        Copyright Office has found that training on copyrighted work qualifies as fair use in
        some cases but not others, and the courts are still sorting out which. We won&apos;t
        build on that, for ourselves or for clients.
      </p>
      <div className="policy-sources">
        <p className="meta meta-dim policy-sources-label">Sources</p>
        <ol>
          <li>
            <a href="https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-3-Generative-AI-Training-Report-Pre-Publication-Version.pdf" target="_blank" rel="noopener noreferrer">
              Copyright and Artificial Intelligence, Part 3: Generative AI Training
            </a>
            <span className="meta meta-dim">U.S. Copyright Office, May 2025 (pre-publication)</span>
          </li>
          <li>
            <a href="https://itsartlaw.org/art-law/artificial-intelligence-and-artists-intellectual-property-unpacking-copyright-infringement-allegations-in-andersen-v-stability-ai-ltd/" target="_blank" rel="noopener noreferrer">
              AI and Artists&apos; IP: Andersen v. Stability AI
            </a>
            <span className="meta meta-dim">Center for Art Law</span>
          </li>
        </ol>
      </div>


      {/* ================== COPYRIGHT ================ */}
      <h2 id="ownership">Why: Ownership and Copyright</h2>
      {/* TODO: confirm wording with counsel before launch. */}
      <p>
        US copyright requires a human author. The Copyright Office won&apos;t register material
        generated by AI without meaningful human authorship, and the courts have upheld that.
        Mixed into a larger work, the AI-generated parts have to be disclosed and excluded when
        the work is registered, and they stay unprotected: gaps in what you actually own.
        Keeping generative AI out of creative deliverables is how we make sure the work you pay
        for is yours.
      </p>
      <div className="policy-sources">
        <p className="meta meta-dim policy-sources-label">Sources</p>
        <ol>
          <li>
            <a href="https://www.copyright.gov/ai/ai_policy_guidance.pdf" target="_blank" rel="noopener noreferrer">
              Copyright Registration Guidance: Works Containing Material Generated by Artificial Intelligence
            </a>
            <span className="meta meta-dim">U.S. Copyright Office, March 2023</span>
          </li>
          <li>
            <a href="https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf" target="_blank" rel="noopener noreferrer">
              Copyright and Artificial Intelligence, Part 2: Copyrightability
            </a>
            <span className="meta meta-dim">U.S. Copyright Office, January 2025</span>
          </li>
          <li>
            <a href="https://www.copyright.gov/ai/docs/court-of-appeals-decision-affirming-refusal-of-registration.pdf" target="_blank" rel="noopener noreferrer">
              Thaler v. Perlmutter
            </a>
            <span className="meta meta-dim">U.S. Court of Appeals, D.C. Circuit, March 2025</span>
          </li>
          <li>
            <a href="https://www.copyright.gov/docs/zarya-of-the-dawn.pdf" target="_blank" rel="noopener noreferrer">
              Zarya of the Dawn registration decision
            </a>
            <span className="meta meta-dim">U.S. Copyright Office, February 2023</span>
          </li>
        </ol>
      </div>


      {/* ========= OWN THE PROCESS ================ */}
      <h2 id="process">Why: Owning the Process</h2>
      <p>
        Engineers and creators need to own the process at every stage to craft their vision.
        Using AI at the more ephemeral layers (grunt code, test cases, bug hunting,
        Photoshop&apos;s tools, cleaning up 3D topology) unlocks real productivity
        without taking away the creator&apos;s vision, ownership, or agency.
      </p>
      <p>
        When you hand an AI coding suite an entire app, website, or game, you end up with
        something nobody on the team actually understands. You can&apos;t edit an experience
        you don&apos;t understand, so every change goes back through the tool, slower and less
        safely each time.
      </p>
      <p>
        We&apos;ve already seen how that ends. An AI agent on Replit wiped a company&apos;s live
        database during a code freeze, then faked records to cover it. Amazon&apos;s own AI
        coding tool reportedly took an AWS service down for 13 hours. Experienced developers
        using AI tools measured 19% slower while believing they were faster. Automation nobody
        understands doesn&apos;t make a product stronger. It makes it fragile.
      </p>
      <div className="policy-sources">
        <p className="meta meta-dim policy-sources-label">Sources</p>
        <ol>
          <li>
            <a href="https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/" target="_blank" rel="noopener noreferrer">
              Vibe coding service Replit deleted user&apos;s production database
            </a>
            <span className="meta meta-dim">The Register, July 2025</span>
          </li>
          <li>
            <a href="https://www.engadget.com/ai/13-hour-aws-outage-reportedly-caused-by-amazons-own-ai-tools-170930190.html" target="_blank" rel="noopener noreferrer">
              13-hour AWS outage reportedly caused by Amazon&apos;s own AI tools
            </a>
            <span className="meta meta-dim">Engadget, reporting the Financial Times, February 2026</span>
          </li>
          <li>
            <a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" target="_blank" rel="noopener noreferrer">
              Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity
            </a>
            <span className="meta meta-dim">METR, July 2025</span>
          </li>
          <li>
            <a href="https://www.crowdstrike.com/wp-content/uploads/2024/08/Channel-File-291-Incident-Root-Cause-Analysis-08.06.2024.pdf" target="_blank" rel="noopener noreferrer">
              Channel File 291 Incident: Root Cause Analysis
            </a>
            <span className="meta meta-dim">CrowdStrike, August 2024</span>
          </li>
        </ol>
      </div>

      <h2 id="bottom-line">The Bottom Line</h2>
      <dl className="policy-contrast">
        <div className="policy-contrast-row policy-contrast-row--robot">
          <dt>Need to find a bug, fast?</dt>
          <dt>Need a suite of monotonous tests?</dt>
          <dd>
            <p className="policy-contrast-answer">Use a robot.</p>
            <ul>
              <li>Low-level execution of well-defined tasks</li>
              <li>Untangling dependency graphs</li>
              <li>Tracing linker errors</li>
              <li>Writing test cases</li>
              <li>Tracking security, accessibility, and legal compliance</li>
              <li>Writing soulless &ldquo;corporate synergy-ese&rdquo;</li>
            </ul>
          </dd>
        </div>
        <div className="policy-contrast-row policy-contrast-row--human">
          <dt>Need something extraordinary, creative, or original?</dt>
          <dd>
            <p className="policy-contrast-answer">You need a gifted human.</p>
            <ul>
              <li>Adding a soul</li>
              <li>Creating art: illustration, animation, music, and sound</li>
              <li>High-level project anatomy and paradigms</li>
              <li>Anything else we&apos;d be proud to call &ldquo;art&rdquo;</li>
            </ul>
          </dd>
        </div>
      </dl>

      {/* THE DIVISION: everything above frames and justifies; everything below
          just states where we stand. "Skip to our policy" lands here. */}
      <hr className="policy-divider" />
      <h2 id="policy" className="policy-division">
        <span className="meta meta-dim policy-division-prompt" aria-hidden="true">
          {'\\>'}
        </span>
        Our Policy
      </h2>
      {/* TODO: keep or cut this example. */}
      <p>
        This site is a working example of our approach. Our AI coding assistant (Claude Opus-5.5) didn&apos;t design it - we did.
        Claude merely it extended a structure we had already hand-built in React, following patterns we set and can still
        read, change, and maintain by hand.
      </p>

      <h3 id="in-house">In-House Projects</h3>
      <div className="policy-rules">
        <div className="policy-rule policy-rule--do">
          <p className="meta policy-rule-label">Do</p>
          <ul>
            <li>Use AI coding assistants to write, review, refactor, and debug code.</li>
            <li>Use it for research, reading documentation, and talking through technical problems.</li>
            <li>Review and test every AI-assisted change before it ships.</li>
          </ul>
        </div>
        <div className="policy-rule policy-rule--dont">
          <p className="meta policy-rule-label">Don&apos;t</p>
          <ul>
            <li>Generate art, animation, music, sound, or voices for our projects.</li>
            <li>Prompt AI to imitate another creator&apos;s style or work.</li>
            <li>Pass off AI output as hand-made.</li>
          </ul>
        </div>
      </div>

      <h3 id="client">Client Projects</h3>
      <div className="policy-rules">
        <div className="policy-rule policy-rule--do">
          <p className="meta policy-rule-label">Do</p>
          <ul>
            <li>Tell you up front where AI tools are part of our technical workflow.</li>
            <li>Have an engineer review, test, and take responsibility for every line we deliver.</li>
            <li>Keep AI tools off your project entirely, if you ask.</li>
          </ul>
        </div>
        <div className="policy-rule policy-rule--dont">
          <p className="meta policy-rule-label">Don&apos;t</p>
          <ul>
            <li>
              Use generative AI for creative deliverables: artwork, animation, music, characters,
              or any other IP you need to own.
            </li>
            <li>
              Put your confidential material (specs, unreleased assets, anything under NDA) into
              AI tools that keep or train on it.
            </li>
            <li>Deliver work whose ownership is in question.</li>
          </ul>
        </div>
      </div>

      <h2 id="questions">Questions</h2>
      <p>
        If you want to know how AI was or wasn&apos;t used on something we made, just ask:{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </PolicyDocument>
  );
}
