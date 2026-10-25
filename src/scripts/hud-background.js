export function initHudBackground() {
  const sections = document.querySelectorAll(
    ".manifesto-section, .journey-section, .bento-section"
  );

  const codeSnippet = String.raw`
<span class="kw-pink">package</span> com.shield.protocol.redops;                                        <span class="comment">// 0xDEAD_BEEF // TACTICAL_EXPLOIT_PAYLOAD</span>
<span class="kw-cyan">import</span> org.shield.offensive.security.<span class="kw-blue">RedTeamDriver</span>;                           <span class="kw-pink">import</span> java.lang.foreign.<span class="kw-blue">MemorySegment</span>;
<span class="kw-cyan">import</span> org.shield.core.crypto.<span class="kw-blue">AESGCMVault</span>;                                     <span class="kw-pink">import</span> java.util.concurrent.<span class="kw-blue">CompletableFuture</span>;

<span class="annotation">@OffensiveCapability(mode = "STEALTH_IN_MEMORY", evasion = true)</span>
<span class="kw-pink">public final class</span> <span class="kw-blue">AdversaryEmulationEngine</span> {                                  <span class="comment">// 11010011 // 0x4F_HOOK_BYPASS // ACTIVE</span>

    <span class="kw-pink">private static final</span> <span class="kw-cyan">byte</span>[] SHELLCODE_SIG = <span class="kw-pink">new byte</span>[]{<span class="num">0x48</span>, <span class="num">0x31</span>, <span class="num">0xC0</span>, <span class="num">0x50</span>, <span class="num">0x48</span>, <span class="num">0xBB</span>, <span class="num">0x2F</span>, <span class="num">0x62</span>};
    <span class="kw-pink">private final</span> <span class="kw-blue">AESGCMVault</span> cryptoEngine = <span class="kw-pink">new</span> <span class="kw-blue">AESGCMVault</span>(<span class="str">"SYS_SEC_KEY_256"</span>);

    <span class="annotation">@RedTeamAudit(target = "VOLATILE_RAM_INJECTION")</span>
    <span class="kw-pink">public</span> <span class="kw-blue">CompletableFuture</span>&lt;<span class="kw-cyan">Boolean</span>&gt; <span class="fn">executeDynamicProbe</span>(<span class="kw-cyan">String</span> targetHost) {  <span class="comment">// SAST_PASSED // ZERO_DISK_FOOTPRINT</span>
        <span class="kw-pink">return</span> <span class="kw-blue">CompletableFuture</span>.<span class="fn">supplyAsync</span>(() -&gt; {
            <span class="kw-cyan">boolean</span> isHalted = <span class="fn">sanitizePipelineVulnerabilities</span>(targetHost);
            <span class="kw-cyan">byte</span>[] decryptedPayload = cryptoEngine.<span class="fn">decryptInMemory</span>(SHELLCODE_SIG);
            <span class="kw-pink">return</span> isHalted &amp;&amp; <span class="fn">injectProcessMemory</span>(decryptedPayload);             <span class="comment">// 0b10011101 // BYPASS_EDR_HOOK</span>
        });
    }

    <span class="kw-pink">private boolean</span> <span class="fn">injectProcessMemory</span>(<span class="kw-cyan">byte</span>[] payload) {
        <span class="kw-pink">try</span> (<span class="kw-blue">MemorySegment</span> segment = <span class="kw-blue">MemorySegment</span>.<span class="fn">allocateNative</span>(payload.length)) {
            segment.<span class="fn">copyFrom</span>(<span class="kw-blue">MemorySegment</span>.<span class="fn">ofArray</span>(payload));
            <span class="kw-pink">return</span> <span class="fn">validateZeroPersistenceState</span>(segment);                         <span class="comment">// BUFFER_OVERWRITE_WITH_ZEROS</span>
        }
    }

    <span class="kw-pink">private boolean</span> <span class="fn">sanitizePipelineVulnerabilities</span>(<span class="kw-cyan">String</span> host) {
        <span class="kw-pink">return</span> host != <span class="kw-pink">null</span> &amp;&amp; host.<span class="fn">matches</span>(<span class="str">"^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$"</span>); <span class="comment">// DEVSECOPS_GATEWAY_OK</span>
    }
}
  `;

  sections.forEach((sec) => {
    sec.style.position = "relative";

    const existing = sec.querySelector(".java-code-overlay");
    if (existing) existing.remove();

    const matrixContainer = document.createElement("div");
    matrixContainer.className = "java-code-overlay";

    const codeBlock = document.createElement("pre");
    codeBlock.className = "java-code-content";
    codeBlock.innerHTML = codeSnippet;

    matrixContainer.appendChild(codeBlock);
    sec.appendChild(matrixContainer);
  });
}
